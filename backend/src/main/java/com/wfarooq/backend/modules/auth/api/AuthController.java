package com.wfarooq.backend.modules.auth.api;

import com.wfarooq.backend.common.dto.ResponseDto;
import com.wfarooq.backend.modules.auth.application.IAuthService;
import com.wfarooq.backend.modules.auth.dto.response.AuthResponse;
import com.wfarooq.backend.modules.users.dto.request.CreateUserRequest;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/v1/auth", produces = {MediaType.APPLICATION_JSON_VALUE})
@Validated
public class AuthController {

    private final IAuthService authService;

    public AuthController(IAuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public ResponseEntity<ResponseDto> register (@Valid @RequestBody CreateUserRequest request) {
        String res = authService.registerUser(request);
        return new ResponseEntity<>(new ResponseDto("201", res), HttpStatus.CREATED);
    }
}
