package com.wfarooq.backend.modules.auth.exception;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;

import java.io.IOException;
import java.time.LocalDateTime;

public class LivQualitiAccessDeniedHandler implements AccessDeniedHandler {
    @Override
    public void handle(HttpServletRequest request, HttpServletResponse response, AccessDeniedException accessDeniedException) throws IOException, ServletException {

        String apiPath = request.getRequestURI();
        int errorCode = HttpStatus.FORBIDDEN.value();
        String errorMessage = HttpStatus.FORBIDDEN.name();
        LocalDateTime errorTime = LocalDateTime.now();

        response.setHeader("error-reason", "Authorization Failed");
        response.setStatus(HttpStatus.FORBIDDEN.value());

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
