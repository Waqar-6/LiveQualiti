package com.wfarooq.backend.modules.wardrobe.repository;

import com.wfarooq.backend.modules.wardrobe.constants.Category;
import com.wfarooq.backend.modules.wardrobe.constants.Color;
import com.wfarooq.backend.modules.wardrobe.constants.Season;
import com.wfarooq.backend.modules.wardrobe.domain.ClothingItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface ClothingItemRepository extends JpaRepository<ClothingItem, UUID> {
    boolean existsByName (String name);
    List<ClothingItem> findByColor (Color color);
    List<ClothingItem> findBySeason (Season season);
    List<ClothingItem> findByCategory (Category category);
}
