package com.wfarooq.backend.modules.auth.security.jwt;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.time.LocalDateTime;

@Component
public class JWTAuthenticationEntryPoint implements AuthenticationEntryPoint {
    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException, ServletException {

        String apiPath = request.getRequestURI();
        int errorCode = HttpStatus.UNAUTHORIZED.value();
        String errorMessage = "Unauthorized access Invalid or missing JWT token";
        LocalDateTime errorTime = LocalDateTime.now();

        String jsonResponse = String.format("""
            {
              "apiPath": "%s",
              "errorCode": %s,
              "errorMessage": "%s",
              "errorTime": "%s"
            }
            """, apiPath, errorCode, errorMessage, errorTime);
        response.setStatus(HttpStatus.UNAUTHORIZED.value());
        response.setContentType("application/json");
        response.getWriter().write(jsonResponse);

    }
}
