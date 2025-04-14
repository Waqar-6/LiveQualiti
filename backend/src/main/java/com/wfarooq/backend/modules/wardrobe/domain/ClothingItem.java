package com.wfarooq.backend.modules.wardrobe.domain;

import com.wfarooq.backend.infrastructure.persistence.BaseEntity;
import com.wfarooq.backend.modules.wardrobe.constants.Category;
import com.wfarooq.backend.modules.wardrobe.constants.Color;
import com.wfarooq.backend.modules.wardrobe.constants.Season;
import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "clothing_items")
public class ClothingItem extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private String name;

    private String description;

    @Enumerated(EnumType.STRING)
    private Category category;

    @Enumerated(EnumType.STRING)
    private Season season;

    @Enumerated(EnumType.STRING)
    private Color color;

    private String imageURL;


    public ClothingItem(LocalDateTime createdAt, String createdBy, LocalDateTime updatedAt, String updatedBy, String name, String description, Category category, Season season, Color color) {
        super(createdAt, createdBy, updatedAt, updatedBy);
        this.name = name;
        this.description = description;
        this.category = category;
        this.season = season;
        this.color = color;
    }

    public ClothingItem(String name, String description, Category category, Season season, Color color) {
        this.name = name;
        this.description = description;
        this.category = category;
        this.season = season;
        this.color = color;
    }

    public ClothingItem () {}

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public Season getSeason() {
        return season;
    }

    public void setSeason(Season season) {
        this.season = season;
    }

    public Color getColor() {
        return color;
    }

    public void setColor(Color color) {
        this.color = color;
    }

    public String getImageURL() {
        return imageURL;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }
}