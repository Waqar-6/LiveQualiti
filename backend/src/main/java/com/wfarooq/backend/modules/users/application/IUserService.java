package com.wfarooq.backend.modules.users.application;

import com.wfarooq.backend.modules.users.dto.request.CreateUserRequest;
import com.wfarooq.backend.modules.users.dto.response.UserResponse;

import java.util.List;
import java.util.UUID;

public interface IUserService {

    UserResponse createUser(CreateUserRequest request);

    UserResponse getUserById(UUID id);

    List<UserResponse> getAllUsers();
}
