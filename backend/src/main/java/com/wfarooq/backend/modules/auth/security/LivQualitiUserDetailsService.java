package com.wfarooq.backend.modules.auth.security;

import com.wfarooq.backend.modules.users.domain.LivQualitiUser;
import com.wfarooq.backend.modules.users.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.time.Instant;
@Service
public class LivQualitiUserDetailsService implements UserDetailsService {
    private static final Logger logger = LoggerFactory.getLogger(LivQualitiUserDetailsService.class);
    private final UserRepository userRepository;

    public LivQualitiUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Instant start = Instant.now();
        logger.debug("[SECURITY] Looking up user by email: {}", username);
        LivQualitiUser livQualitiUser = userRepository
                .findByEmail(username).orElseThrow(() -> {
                    logger.warn("[SECURITY] [FAILURE] User with email {} not found", username);
                   return new UsernameNotFoundException("User not found with the given email");
                });

        logger.debug("[SECURITY] [SUCCESS] User found: {}", username);
        logger.info("[SECURITY] User {} found in {}ms", username, Duration.between(start, Instant.now()).toMillis());
        return new LivQualitiCustomUserDetails(livQualitiUser);
    }
}
