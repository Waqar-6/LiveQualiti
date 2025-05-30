package com.wfarooq.backend.modules.auth.events;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.event.EventListener;
import org.springframework.security.authentication.event.AbstractAuthenticationFailureEvent;
import org.springframework.security.authentication.event.AuthenticationSuccessEvent;
import org.springframework.stereotype.Component;

@Component
public class AuthenticationEvents {
    private static final Logger log = LoggerFactory.getLogger(AuthenticationEvents.class);

    @EventListener
    public void onSuccess (AuthenticationSuccessEvent successEvent) {
        log.info("[AUTH] [SUCCESS] login successful for the user : {}", successEvent.getAuthentication().getName());
    }

    @EventListener
    public void onFailure (AbstractAuthenticationFailureEvent failureEvent) {
        log.error("[AUTH] [FAILURE] login failed for the user : {}, due to : {}", failureEvent.getAuthentication().getName(), failureEvent.getException().getMessage());
    }
}
