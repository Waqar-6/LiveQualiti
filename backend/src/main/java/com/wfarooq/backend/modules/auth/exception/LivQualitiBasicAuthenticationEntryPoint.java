package com.wfarooq.backend.modules.auth.exception;

import com.wfarooq.backend.common.dto.ErrorResponseDto;
import com.wfarooq.backend.common.utils.JsonUtils;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;

import java.io.IOException;
import java.time.LocalDateTime;

public class LivQualitiBasicAuthenticationEntryPoint implements AuthenticationEntryPoint {
    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException, ServletException {

        String apiPath = request.getRequestURI();
        int errorCode = HttpStatus.UNAUTHORIZED.value();
        String errorMessage = HttpStatus.UNAUTHORIZED.name();
        LocalDateTime errorTime = LocalDateTime.now();


        response.setHeader("error-reason", "Authentication Failed");
        response.setStatus(HttpStatus.UNAUTHORIZED.value());
        response.setContentType("application/json;charset=UTF-8");
        String jsonResponse = String.format("""
            {
              "apiPath": "%s",
              "errorCode": %s,
              "errorMessage": "%s",
              "errorTime": "%s"
            }
            """, apiPath, errorCode, errorMessage, errorTime);
        response.getWriter().write(jsonResponse);

    }
}
