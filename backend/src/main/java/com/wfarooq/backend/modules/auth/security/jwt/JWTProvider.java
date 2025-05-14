package com.wfarooq.backend.modules.auth.security.jwt;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.time.Duration;
import java.time.Instant;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Configuration
public class JWTProvider {
    private static final Logger logger = LoggerFactory.getLogger(JWTProvider.class);

    @Value("${app.jwt-secret}")
    private String jwtSecret;
    @Value("${app.jwt-expiry-time}")
    private Long jwtExpiryTime;

    public String generateJwtToken(Authentication authentication) {
        Instant start = Instant.now();
        logger.debug("[JWT_PROVIDER] Generating JWT token for user: {}", authentication.getName());

        Date currentDate = new Date();
        Date expiryDate = new Date(currentDate.getTime() + jwtExpiryTime);

        String token = Jwts.builder()
                .issuer("liv qualiti")
                .subject(authentication.getName())
                .claim("authorities", authentication.getAuthorities()
                        .stream().map(GrantedAuthority::getAuthority).collect(Collectors.joining(",")))
                .issuedAt(new Date())
                .expiration(expiryDate)
                .signWith(generateKey())
                .compact();

        logger.info("[JWT_PROVIDER] [SUCCESS] JWT token generated for user {} in {}ms",
                authentication.getName(), Duration.between(start, Instant.now()).toMillis());

        return token;
    }

    private Key generateKey() {
        return Keys.hmacShaKeyFor(jwtSecret.getBytes(StandardCharsets.UTF_8));
    }

    public String getEmailFromToken(String token) {
        Instant start = Instant.now();
        logger.debug("[JWT_PROVIDER] Extracting email from JWT token");

        try {
            String email = Jwts.parser()
                    .verifyWith((SecretKey) generateKey())
                    .build()
                    .parseSignedClaims(token)
                    .getPayload()
                    .getSubject();

            logger.info("[JWT_PROVIDER] [SUCCESS] Email extracted in {}ms",
                    Duration.between(start, Instant.now()).toMillis());

            return email;
        } catch (Exception ex) {
            logger.warn("[JWT_PROVIDER] [FAILURE] Failed to extract email: {}", ex.getMessage());
            throw ex;
        }
    }

    public List<GrantedAuthority> getAuthoritiesFromToken(String token) {
        Instant start = Instant.now();
        logger.debug("[JWT_PROVIDER] Extracting authorities from JWT token");

        try {
            Claims claims = Jwts.parser()
                    .verifyWith((SecretKey) generateKey())
                    .build()
                    .parseSignedClaims(token)
                    .getPayload();

            String authorities = (String) claims.get("authorities");

            if (authorities == null || authorities.isEmpty()) {
                logger.debug("[JWT_PROVIDER] No authorities found in token");
                return List.of();
            }

            List<GrantedAuthority> grantedAuthorities = Arrays.stream(authorities.split(","))
                    .map(String::trim)
                    .map(SimpleGrantedAuthority::new)
                    .collect(Collectors.toList());

            logger.info("[JWT_PROVIDER] [SUCCESS] Authorities extracted in {}ms",
                    Duration.between(start, Instant.now()).toMillis());

            return grantedAuthorities;
        } catch (Exception ex) {
            logger.warn("[JWT_PROVIDER] [FAILURE] Failed to extract authorities: {}", ex.getMessage());
            throw ex;
        }
    }

    public boolean validateToken(String token) {
        Instant start = Instant.now();
        logger.debug("[JWT_PROVIDER] Validating JWT token");

        try {
            Jwts.parser()
                    .verifyWith((SecretKey) generateKey())
                    .build()
                    .parse(token);

            logger.info("[JWT_PROVIDER] [SUCCESS] JWT token validated in {}ms",
                    Duration.between(start, Instant.now()).toMillis());

            return true;
        } catch (MalformedJwtException e) {
            logger.warn("[JWT_PROVIDER] [FAILURE] Invalid JWT token: {}", e.getMessage());
            throw new RuntimeException("Invalid JWT token", e);
        } catch (ExpiredJwtException e) {
            logger.warn("[JWT_PROVIDER] [FAILURE] JWT token has expired: {}", e.getMessage());
            throw new RuntimeException("JWT token has expired", e);
        } catch (UnsupportedJwtException e) {
            logger.warn("[JWT_PROVIDER] [FAILURE] Unsupported JWT token: {}", e.getMessage());
            throw new RuntimeException("Unsupported JWT token", e);
        } catch (IllegalArgumentException e) {
            logger.warn("[JWT_PROVIDER] [FAILURE] JWT claims string is empty: {}", e.getMessage());
            throw new RuntimeException("JWT claims string is empty", e);
        } catch (Exception e) {
            logger.error("[JWT_PROVIDER] [FAILURE] JWT token validation failed: {}", e.getMessage());
            throw new RuntimeException("JWT token validation failed", e);
        }
    }

    public Claims getAllClaimsFromToken(String token) {
        Instant start = Instant.now();
        logger.debug("[JWT_PROVIDER] Extracting all claims from JWT token");

        try {
            Claims claims = Jwts.parser()
                    .verifyWith((SecretKey) generateKey())
                    .build()
                    .parseSignedClaims(token)
                    .getPayload();

            logger.info("[JWT_PROVIDER] [SUCCESS] All claims extracted in {}ms",
                    Duration.between(start, Instant.now()).toMillis());

            return claims;
        } catch (Exception ex) {
            logger.warn("[JWT_PROVIDER] [FAILURE] Failed to extract claims: {}", ex.getMessage());
            throw ex;
        }
    }
}