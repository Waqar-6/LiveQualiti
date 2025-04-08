package com.wfarooq.backend.modules.wardrobe.application;

import com.wfarooq.backend.modules.wardrobe.dto.request.CreateClothingItemRequest;
import com.wfarooq.backend.modules.wardrobe.dto.response.ClothingItemResponse;

import java.util.UUID;

public interface IClothingService {

    ClothingItemResponse createClothingItem(CreateClothingItemRequest request, UUID userId);

    ClothingItemResponse getClothingItemById(UUID id);

    ClothingItemResponse updateClothingItem(UUID id, CreateClothingItemRequest updatedItem);

    void deleteClothingItem(UUID id);

}
