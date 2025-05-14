package com.wfarooq.backend.modules.auth.application;

import com.wfarooq.backend.modules.auth.dto.request.LoginRequest;
import com.wfarooq.backend.modules.auth.dto.response.AuthResponse;
import com.wfarooq.backend.modules.auth.security.jwt.JWTProvider;
import com.wfarooq.backend.modules.users.application.IUserService;
import com.wfarooq.backend.modules.users.dto.request.CreateUserRequest;
import com.wfarooq.backend.modules.users.dto.response.UserResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.time.Instant;

@Service
public class AuthServiceImpl implements IAuthService{
    private static final Logger logger = LoggerFactory.getLogger(AuthServiceImpl.class);
    private final IUserService userService;
    private final PasswordEncoder passwordEncoder;
    private final JWTProvider jwtProvider;
    private final AuthenticationManager authenticationManager;

    public AuthServiceImpl(IUserService userService, PasswordEncoder passwordEncoder, JWTProvider jwtProvider, AuthenticationManager authenticationManager) {
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
        this.jwtProvider = jwtProvider;
        this.authenticationManager = authenticationManager;
    }

    @Override
    public String registerUser(CreateUserRequest request) {
        Instant start = Instant.now();
        logger.debug("[AUTH_SERVICE] Registering new user: {}", request.getEmail());

        String hashedPwd = passwordEncoder.encode(request.getPassword());
        request.setPassword(hashedPwd);
        UserResponse userResponse = userService.createUser(request);

        logger.info("[AUTH_SERVICE] [SUCCESS] User {} registered in {}ms",
                request.getEmail(), Duration.between(start, Instant.now()).toMillis());
        return "Registered Successfully";
    }

    @Override
    public AuthResponse login(LoginRequest loginRequest) {
        Instant start = Instant.now();
        logger.debug("[AUTH_SERVICE] Processing login request for user: {}", loginRequest.getEmail());

        try {
            UsernamePasswordAuthenticationToken authenticationToken =
                    UsernamePasswordAuthenticationToken.unauthenticated(loginRequest.getEmail(), loginRequest.getPassword());

            Authentication authentication = authenticationManager.authenticate(authenticationToken);
            String jwtToken = jwtProvider.generateJwtToken(authentication);

            logger.info("[AUTH_SERVICE] [SUCCESS] User {} logged in successfully in {}ms",
                    loginRequest.getEmail(), Duration.between(start, Instant.now()).toMillis());

            return new AuthResponse(jwtToken);
        } catch (Exception ex) {
            logger.warn("[AUTH_SERVICE] [FAILURE] Login failed for user {}: {}",
                    loginRequest.getEmail(), ex.getMessage());
            throw ex;
        }
    }
}