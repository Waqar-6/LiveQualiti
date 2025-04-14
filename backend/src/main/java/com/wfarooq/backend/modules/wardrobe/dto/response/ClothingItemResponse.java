package com.wfarooq.backend.modules.wardrobe.dto.response;

import com.wfarooq.backend.modules.wardrobe.constants.Category;
import com.wfarooq.backend.modules.wardrobe.constants.Color;
import com.wfarooq.backend.modules.wardrobe.constants.Season;

import java.time.LocalDateTime;
import java.util.UUID;

public class ClothingItemResponse {

    private UUID id;
    private String name;
    private Category category;
    private Season season;
    private Color color;
    private String imageUrl;
    private LocalDateTime createdAt;

    public ClothingItemResponse(UUID id, String name, Category category, Season season, Color color,String imageUrl, LocalDateTime createdAt) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.season = season;
        this.color = color;
        this.imageUrl = imageUrl;
        this.createdAt = createdAt;
    }

    public ClothingItemResponse () {}

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

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public String getImageUrl() {return imageUrl;}

    public void setImageUrl(String imageUrl) {this.imageUrl = imageUrl;}

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}