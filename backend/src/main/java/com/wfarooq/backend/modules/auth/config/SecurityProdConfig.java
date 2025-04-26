package com.wfarooq.backend.modules.auth.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@Profile("prod")
public class SecurityProdConfig {

    @Bean
    SecurityFilterChain securityFilterChain (HttpSecurity http) throws Exception {
        System.out.println("/////// Prod Security Config Loaded /////////");
        http
                .requiresChannel(rcc -> rcc.anyRequest().requiresSecure()) // accepts only HTTPS traffic
                .csrf(AbstractHttpConfigurer::disable)
                .cors(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(request -> request
                        .requestMatchers("/api/v1/auth/**").permitAll()
                        .anyRequest().authenticated());



        http.httpBasic(withDefaults());
        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder () {return PasswordEncoderFactories.createDelegatingPasswordEncoder();}

}
