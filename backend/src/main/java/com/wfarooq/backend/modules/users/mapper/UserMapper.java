package com.wfarooq.backend.modules.users.mapper;


import com.wfarooq.backend.modules.users.domain.LivQualitiUser;
import com.wfarooq.backend.modules.users.dto.request.CreateUserRequest;
import com.wfarooq.backend.modules.users.dto.response.UserResponse;

public class UserMapper {

    public static LivQualitiUser toEntity(CreateUserRequest request, LivQualitiUser user) {
        user.setFirstName(request.getFirstName());
        user.setLastName(request.getLastName());
        user.setUsername(request.getUsername());
        user.setEmail(request.getEmail());
        user.setPassword(request.getPassword());
        return user;
    }

    public static UserResponse toResponse(LivQualitiUser user, UserResponse response) {
        response.setId(user.getId());
        response.setFirstName(user.getFirstName());
        response.setLastName(user.getLastName());
        response.setUsername(user.getUsername());
        response.setEmail(user.getEmail());
        return response;
    }
}
