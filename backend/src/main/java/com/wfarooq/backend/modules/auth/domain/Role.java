package com.wfarooq.backend.modules.auth.domain;

import com.wfarooq.backend.common.enums.Roles;
import com.wfarooq.backend.modules.users.domain.LivQualitiUser;
import jakarta.persistence.*;

@Entity
@Table(name = "roles")
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private LivQualitiUser user;
    @Enumerated(EnumType.STRING)
    private Roles name;

    public Role(Long id, LivQualitiUser user, Roles name) {
        this.id = id;
        this.user = user;
        this.name = name;
    }

    public Role () {}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LivQualitiUser getUser() {
        return user;
    }

    public void setUser(LivQualitiUser user) {
        this.user = user;
    }

    public Roles getName() {
        return name;
    }

    public void setName(Roles name) {
        this.name = name;
    }
}
