package com.wfarooq.backend.modules.wardrobe.repository;

import com.wfarooq.backend.modules.wardrobe.domain.ClothingItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface ClothingItemRepository extends JpaRepository<ClothingItem, UUID> {
    boolean existsByName (String name);
}
