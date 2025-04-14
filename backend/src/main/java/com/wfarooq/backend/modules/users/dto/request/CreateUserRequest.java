package com.wfarooq.backend.modules.users.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class CreateUserRequest {
    @NotBlank(message = "first name can not be empty")
    @Size(min = 2, max = 20, message = "first name can not be less then 2 characters and not more then 20")
    private String firstName;
    @NotBlank(message = "last name can not be empty")
    @Size(min = 2, max = 20, message = "last name can not be less then 2 characters and not more then 20")
    private String lastName;
    @NotBlank private String username;
    @Email(message = "has to be a valid email")
    @NotBlank(message = "email can not be empty")
    private String email;
    @NotBlank(message = "password can not be empty")
    @Size(min = 6, max = 20, message = "email can not be less then 6 characters or more then 20")
    private String password;

    public CreateUserRequest(String firstName, String lastName, String username, String email, String password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.password = password;
    }

    public CreateUserRequest () {}

    public @NotBlank(message = "first name can not be empty") @Size(min = 2, max = 20, message = "first name can not be less then 2 characters and not more then 20") String getFirstName() {
        return firstName;
    }

    public void setFirstName(@NotBlank(message = "first name can not be empty") @Size(min = 2, max = 20, message = "first name can not be less then 2 characters and not more then 20") String firstName) {
        this.firstName = firstName;
    }

    public @NotBlank(message = "last name can not be empty") @Size(min = 2, max = 20, message = "last name can not be less then 2 characters and not more then 20") String getLastName() {
        return lastName;
    }

    public void setLastName(@NotBlank(message = "last name can not be empty") @Size(min = 2, max = 20, message = "last name can not be less then 2 characters and not more then 20") String lastName) {
        this.lastName = lastName;
    }

    public @NotBlank String getUsername() {
        return username;
    }

    public void setUsername(@NotBlank String username) {
        this.username = username;
    }

    public @Email(message = "has to be a valid email") @NotBlank(message = "email can not be empty") String getEmail() {
        return email;
    }

    public void setEmail(@Email(message = "has to be a valid email") @NotBlank(message = "email can not be empty") String email) {
        this.email = email;
    }

    public @NotBlank(message = "password can not be empty") @Size(min = 6, max = 20, message = "email can not be less then 6 characters or more then 20") String getPassword() {
        return password;
    }

    public void setPassword(@NotBlank(message = "password can not be empty") @Size(min = 6, max = 20, message = "email can not be less then 6 characters or more then 20") String password) {
        this.password = password;
    }
}
