package com.wfarooq.backend.modules.auth.security;

import com.wfarooq.backend.modules.users.domain.LivQualitiUser;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

public class LivQualitiCustomUserDetails implements UserDetails {
    private LivQualitiUser livQualitiUser;

    public LivQualitiCustomUserDetails(LivQualitiUser livQualitiUser) {
        this.livQualitiUser = livQualitiUser;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of();
    }

    @Override
    public String getPassword() {
        return livQualitiUser.getPassword();
    }

    @Override
    public String getUsername() {
        return livQualitiUser.getEmail();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public LivQualitiUser getLivQualitiUser() {
        return livQualitiUser;
    }

    public void setLivQualitiUser(LivQualitiUser livQualitiUser) {
        this.livQualitiUser = livQualitiUser;
    }
}
