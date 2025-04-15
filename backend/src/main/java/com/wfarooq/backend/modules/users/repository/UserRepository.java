package com.wfarooq.backend.modules.users.repository;

import com.wfarooq.backend.modules.users.domain.LivQualitiUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface UserRepository extends JpaRepository<LivQualitiUser, UUID> {

    Optional<LivQualitiUser> findByEmail(String email);
    Optional<LivQualitiUser> findByUsername (String username);

    boolean existsByEmail (String email);
    boolean existsByUsername (String username);

}
