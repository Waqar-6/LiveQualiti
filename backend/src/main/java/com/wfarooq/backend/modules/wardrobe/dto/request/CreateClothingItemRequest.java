package com.wfarooq.backend.modules.wardrobe.dto.request;

import com.wfarooq.backend.modules.wardrobe.constants.Category;
import com.wfarooq.backend.modules.wardrobe.constants.Color;
import com.wfarooq.backend.modules.wardrobe.constants.Season;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public class CreateClothingItemRequest {

    @NotBlank(message = "Name is required")
    @Size(max = 50, message = "Name must not exceed 50 characters")
    private String name;

    @NotBlank(message = "Name is required")
    @Size(max = 200, message = "Name must not exceed 50 characters")
    private String description;

    @NotNull(message = "Category is required")
    private Category category;

    @NotNull(message = "Season is required")
    private Season season;

    @NotNull(message = "Color is required")
    private Color color;


    public CreateClothingItemRequest(String name, String description, Category category, Season season, Color color) {
        this.name = name;
        this.description = description;
        this.category = category;
        this.season = season;
        this.color = color;
    }

    public CreateClothingItemRequest () {}

    public @NotBlank(message = "Name is required") @Size(max = 50, message = "Name must not exceed 50 characters") String getName() {
        return name;
    }

    public void setName(@NotBlank(message = "Name is required") @Size(max = 50, message = "Name must not exceed 50 characters") String name) {
        this.name = name;
    }

    public @NotBlank(message = "Name is required") @Size(max = 200, message = "Name must not exceed 50 characters") String getDescription() {
        return description;
    }

    public void setDescription(@NotBlank(message = "Name is required") @Size(max = 200, message = "Name must not exceed 50 characters") String description) {
        this.description = description;
    }

    public @NotNull(message = "Category is required") Category getCategory() {
        return category;
    }

    public void setCategory(@NotNull(message = "Category is required") Category category) {
        this.category = category;
    }

    public @NotNull(message = "Season is required") Season getSeason() {
        return season;
    }

    public void setSeason(@NotNull(message = "Season is required") Season season) {
        this.season = season;
    }

    public @NotNull(message = "Color is required") Color getColor() {
        return color;
    }

    public void setColor(@NotNull(message = "Color is required") Color color) {
        this.color = color;
    }
}