package com.wfarooq.backend.modules.auth.security;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.time.Duration;
import java.time.Instant;

@Component
public class LivQualitiUsernamePasswordAuthenticationProvider implements AuthenticationProvider {
    private static final Logger logger = LoggerFactory.getLogger(LivQualitiUsernamePasswordAuthenticationProvider.class);
    private final LivQualitiUserDetailsService livQualitiUserDetailsService;
    private final PasswordEncoder passwordEncoder;

    public LivQualitiUsernamePasswordAuthenticationProvider(LivQualitiUserDetailsService livQualitiUserDetailsService, PasswordEncoder passwordEncoder) {
        this.livQualitiUserDetailsService = livQualitiUserDetailsService;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        Instant start = Instant.now();
        String email = authentication.getName();
        String password = authentication.getCredentials().toString();

        logger.debug("[AUTH_PROVIDER] Authenticating user: {}", email);
        UserDetails userDetails = livQualitiUserDetailsService.loadUserByUsername(email);

        if (passwordEncoder.matches(password, userDetails.getPassword())) {
            logger.info("[AUTH_PROVIDER] [SUCCESS] User {} authenticated in {}ms",email, Duration.between(start, Instant.now()).toMillis());
            return new UsernamePasswordAuthenticationToken(email, password, userDetails.getAuthorities());
        }else {
            logger.warn("[AUTH_PROVIDER] [FAILURE] Invalid password for user {}", email);
            throw new BadCredentialsException("incorrect email or password");
        }
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return (UsernamePasswordAuthenticationToken.class.isAssignableFrom(authentication));
    }
}
