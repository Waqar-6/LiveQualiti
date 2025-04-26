package com.wfarooq.backend.modules.auth.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class LoginRequest {

    @NotBlank(message = "email can not be empty")
    @Email(message = "has to be a valid email")
    private String email;
    @NotBlank(message = "password can not be empty")
    @Size(min = 6, max = 20, message = "password can not less then 6 characters and more than 20")
    private String password;

    public LoginRequest(String email, String password) {
        this.email = email;
        this.password = password;
    }

    public LoginRequest () {}

    public @NotBlank(message = "email can not be empty") @Email(message = "has to be a valid email") String getEmail() {
        return email;
    }

    public void setEmail(@NotBlank(message = "email can not be empty") @Email(message = "has to be a valid email") String email) {
        this.email = email;
    }

    public @NotBlank(message = "password can not be empty") @Size(min = 6, max = 20, message = "password can not less then 6 characters and more than 20") String getPassword() {
        return password;
    }

    public void setPassword(@NotBlank(message = "password can not be empty") @Size(min = 6, max = 20, message = "password can not less then 6 characters and more than 20") String password) {
        this.password = password;
    }
}
