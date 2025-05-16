package com.wfarooq.backend.modules.auth.config;

import com.wfarooq.backend.modules.auth.exception.LivQualitiAccessDeniedHandler;
import com.wfarooq.backend.modules.auth.filters.CSRFTokenFilter;
import com.wfarooq.backend.modules.auth.security.LivQualitiUserDetailsService;
import com.wfarooq.backend.modules.auth.security.LivQualitiUsernamePasswordAuthenticationProvider;
import com.wfarooq.backend.modules.auth.security.jwt.JWTAuthenticationEntryPoint;
import com.wfarooq.backend.modules.auth.security.jwt.JWTProvider;
import com.wfarooq.backend.modules.auth.security.jwt.JWTValidationFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import org.springframework.security.web.csrf.CsrfTokenRequestAttributeHandler;
import org.springframework.web.cors.CorsConfiguration;

import java.util.Arrays;
import java.util.Collections;

@Configuration
@Profile("!prod")
public class SecurityConfig {

    private final JWTAuthenticationEntryPoint jwtAuthenticationEntryPoint;
    private final JWTProvider jwtProvider;
    private final LivQualitiUserDetailsService livQualitiUserDetailsService;


    public SecurityConfig(JWTAuthenticationEntryPoint jwtAuthenticationEntryPoint,
                          JWTProvider jwtProvider,
                          LivQualitiUserDetailsService livQualitiUserDetailsService) {
        this.jwtAuthenticationEntryPoint = jwtAuthenticationEntryPoint;
        this.jwtProvider = jwtProvider;
        this.livQualitiUserDetailsService = livQualitiUserDetailsService;
    }

    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        System.out.println("/////// Non Prod Security Config Loaded /////////");

        CsrfTokenRequestAttributeHandler csrfTokenRequestAttributeHandler = new CsrfTokenRequestAttributeHandler();

        http
                .requiresChannel(rcc -> rcc.anyRequest().requiresInsecure())
                .csrf(csrfConfig -> csrfConfig.csrfTokenRequestHandler(csrfTokenRequestAttributeHandler)
                        .ignoringRequestMatchers("/api/v1/auth/login","/api/v1/auth/register")
                        .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse()))
                .cors(corsConfig -> corsConfig.configurationSource(request -> {
                    CorsConfiguration config = new CorsConfiguration();
                    config.setAllowedOrigins(Collections.singletonList("*"));
                    config.setAllowedMethods(Collections.singletonList("*"));
                    config.setAllowCredentials(true);
                    config.setAllowedHeaders(Collections.singletonList("*"));
                    config.setExposedHeaders(Arrays.asList("Authorization"));
                    config.setMaxAge(3600L);
                    return config;
                }))
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authorizeHttpRequests(request -> request
                        .requestMatchers("/api/v1/auth/**").permitAll()
                        .anyRequest().authenticated())
                .addFilterAfter(new CSRFTokenFilter(), BasicAuthenticationFilter.class)
                .addFilterBefore(new JWTValidationFilter(jwtProvider), BasicAuthenticationFilter.class);

        http.exceptionHandling(exceptionHandling -> exceptionHandling
                .authenticationEntryPoint(jwtAuthenticationEntryPoint)
                .accessDeniedHandler(new LivQualitiAccessDeniedHandler())
        );

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(
            AuthenticationConfiguration authConfig,
            LivQualitiUserDetailsService userDetailsService,
            PasswordEncoder passwordEncoder) throws Exception {


        LivQualitiUsernamePasswordAuthenticationProvider customAuthProvider =
                new LivQualitiUsernamePasswordAuthenticationProvider(userDetailsService, passwordEncoder);


        DaoAuthenticationProvider daoProvider = new DaoAuthenticationProvider();
        daoProvider.setUserDetailsService(userDetailsService);
        daoProvider.setPasswordEncoder(passwordEncoder);

        return new ProviderManager(
                Arrays.asList(
                        customAuthProvider,  // Your custom provider first
                        daoProvider         // Fallback to standard DAO provider
                )
        );
    }
}