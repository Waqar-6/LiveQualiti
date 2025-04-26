package com.wfarooq.backend.modules.auth.application;

import com.wfarooq.backend.modules.auth.dto.request.LoginRequest;
import com.wfarooq.backend.modules.auth.dto.response.AuthResponse;
import com.wfarooq.backend.modules.users.dto.request.CreateUserRequest;
import com.wfarooq.backend.modules.users.dto.response.UserResponse;

public interface IAuthService {

    String registerUser (CreateUserRequest request);
    AuthResponse login (LoginRequest loginRequest);
}
