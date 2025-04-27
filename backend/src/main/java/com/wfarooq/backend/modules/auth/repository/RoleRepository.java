package com.wfarooq.backend.modules.auth.repository;

import com.wfarooq.backend.modules.auth.domain.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
}
