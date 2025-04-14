package com.wfarooq.backend.modules.wardrobe.mapper;

import com.wfarooq.backend.modules.wardrobe.domain.ClothingItem;
import com.wfarooq.backend.modules.wardrobe.dto.request.CreateClothingItemRequest;
import com.wfarooq.backend.modules.wardrobe.dto.response.ClothingItemResponse;

public class ClothingItemMapper {

    public static ClothingItem toEntity(CreateClothingItemRequest request, ClothingItem clothingItem) {
        clothingItem.setName(request.getName());
        clothingItem.setCategory(request.getCategory());
        clothingItem.setSeason(request.getSeason());
        clothingItem.setColor(request.getColor());
        return clothingItem;
    }

    public static ClothingItemResponse toResponse(ClothingItem item, ClothingItemResponse response ) {
        response.setId(item.getId());
        response.setName(item.getName());
        response.setCategory(item.getCategory());
        response.setSeason(item.getSeason());
        response.setColor(item.getColor());
        response.setImageUrl(item.getImageURL());
        response.setCreatedAt(item.getCreatedAt());
        return response;
    }
}