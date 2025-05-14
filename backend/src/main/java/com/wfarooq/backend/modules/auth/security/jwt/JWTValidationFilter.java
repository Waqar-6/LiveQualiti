package com.wfarooq.backend.modules.auth.security.jwt;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.time.Duration;
import java.time.Instant;
import java.util.List;

public class JWTValidationFilter extends OncePerRequestFilter {
    private static final Logger logger = LoggerFactory.getLogger(JWTValidationFilter.class);

    private final JWTProvider jwtProvider;

    public JWTValidationFilter(JWTProvider jwtProvider) {
        this.jwtProvider = jwtProvider;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {

        Instant start = Instant.now();
        String endpoint = request.getRequestURI();
        logger.debug("[JWT_FILTER] Processing request to: {}", endpoint);

        try {
            // Extract JWT from request header
            String jwt = getTokenFromRequest(request);

            // If token exists and is valid
            if (StringUtils.hasText(jwt) && jwtProvider.validateToken(jwt)) {

                // Get user details from token
                String email = jwtProvider.getEmailFromToken(jwt);
                List<GrantedAuthority> authorities = jwtProvider.getAuthoritiesFromToken(jwt);

                logger.debug("[JWT_FILTER] Authenticated user: {} with authorities: {}", email, authorities);

                // Create authentication object with authorities
                UsernamePasswordAuthenticationToken authentication =
                        new UsernamePasswordAuthenticationToken(
                                email,
                                null,
                                authorities
                        );

                // Set authentication in security context
                SecurityContextHolder.getContext().setAuthentication(authentication);

                logger.info("[JWT_FILTER] [SUCCESS] JWT authenticated user {} in {}ms",
                        email, Duration.between(start, Instant.now()).toMillis());
            } else {
                logger.debug("[JWT_FILTER] No valid JWT token found for request");
            }
        } catch (Exception ex) {
            logger.error("[JWT_FILTER] [FAILURE] Cannot set user authentication: {}", ex.getMessage());
            SecurityContextHolder.clearContext();
        }

        // Continue the filter chain
        filterChain.doFilter(request, response);
    }

    private String getTokenFromRequest(HttpServletRequest request) {
        String bearerToken = request.getHeader("Authorization");
        if (StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")) {
            String token = bearerToken.substring(7);
            logger.debug("[JWT_FILTER] Extracted JWT token from Authorization header");
            return token;
        }
        logger.debug("[JWT_FILTER] No JWT token found in Authorization header");
        return null;
    }

    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) {
        // Don't filter login and register endpoints
        String path = request.getServletPath();
        boolean shouldNotFilter = path.equals("/api/v1/auth/login") || path.equals("/api/v1/auth/register");

        if (shouldNotFilter) {
            logger.debug("[JWT_FILTER] Skipping JWT validation for endpoint: {}", path);
        }

        return shouldNotFilter;
    }
}