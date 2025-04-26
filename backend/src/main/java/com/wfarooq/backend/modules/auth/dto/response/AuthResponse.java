package com.wfarooq.backend.modules.auth.dto.response;

import com.wfarooq.backend.modules.users.dto.response.UserResponse;

public class AuthResponse {
    private UserResponse userResponse;
    private String message;

    public AuthResponse(UserResponse userResponse, String message) {
        this.userResponse = userResponse;
        this.message = message;
    }

    public UserResponse getUserResponse() {
        return userResponse;
    }

    public void setUserResponse(UserResponse userResponse) {
        this.userResponse = userResponse;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
