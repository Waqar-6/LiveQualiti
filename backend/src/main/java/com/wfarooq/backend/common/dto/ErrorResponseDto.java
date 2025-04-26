package com.wfarooq.backend.common.dto;


import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.http.HttpStatus;

import java.time.LocalDateTime;

public class ErrorResponseDto {
    private String apiPath;
    private HttpStatus errorStatus;
    private String errorMessage;
    private LocalDateTime errorTime;

    public ErrorResponseDto(String apiPath, HttpStatus errorStatus, String errorMessage, LocalDateTime errorTime) {
        this.apiPath = apiPath;
        this.errorStatus = errorStatus;
        this.errorMessage = errorMessage;
        this.errorTime = errorTime;
    }

    public ErrorResponseDto () {}

    public String getApiPath() {
        return apiPath;
    }

    public void setApiPath(String apiPath) {
        this.apiPath = apiPath;
    }

    public HttpStatus getErrorStatus() {
        return errorStatus;
    }

    public void setErrorStatus(HttpStatus errorStatus) {
        this.errorStatus = errorStatus;
    }

    public String getErrorMessage() {
        return errorMessage;
    }

    public void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }

    public LocalDateTime getErrorTime() {
        return errorTime;
    }

    public void setErrorTime(LocalDateTime errorTime) {
        this.errorTime = errorTime;
    }

    @Override
    public String toString() {
        return "ErrorResponseDto{" +
                "apiPath='" + this.apiPath + '\'' +
                ", errorStatus=" + (this.errorStatus != null ? errorStatus.value() + " " + errorStatus.name() : "null") +
                ", errorMessage='" + this.errorMessage + '\'' +
                ", errorTime=" + (this.errorTime != null ? this.errorTime.toString() : "null") +
                '}';
    }
}
