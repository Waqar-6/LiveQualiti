package com.wfarooq.backend.modules.auth.application;

import com.wfarooq.backend.modules.auth.dto.request.LoginRequest;
import com.wfarooq.backend.modules.auth.dto.response.AuthResponse;
import com.wfarooq.backend.modules.users.application.IUserService;
import com.wfarooq.backend.modules.users.dto.request.CreateUserRequest;
import com.wfarooq.backend.modules.users.dto.response.UserResponse;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements IAuthService{
    private final IUserService userService;
    private final PasswordEncoder passwordEncoder;

    public AuthServiceImpl(IUserService userService, PasswordEncoder passwordEncoder) {
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public String registerUser(CreateUserRequest request) {
        String hashedPwd = passwordEncoder.encode(request.getPassword());
        request.setPassword(hashedPwd);
        UserResponse userResponse = userService.createUser(request);
        return "Registered Successfully";
    }

    @Override
    public AuthResponse login(LoginRequest loginRequest) {
        return null;
    }
}
