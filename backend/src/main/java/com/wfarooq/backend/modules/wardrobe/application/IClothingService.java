package com.wfarooq.backend.modules.wardrobe.application;

import com.wfarooq.backend.modules.wardrobe.constants.Category;
import com.wfarooq.backend.modules.wardrobe.constants.Color;
import com.wfarooq.backend.modules.wardrobe.constants.Season;
import com.wfarooq.backend.modules.wardrobe.dto.request.CreateClothingItemRequest;
import com.wfarooq.backend.modules.wardrobe.dto.response.ClothingItemResponse;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.UUID;

public interface IClothingService {

    // CRUD
    ClothingItemResponse createClothingItem(CreateClothingItemRequest request, MultipartFile file);

    ClothingItemResponse getClothingItemById(UUID id);

    ClothingItemResponse updateClothingItem(UUID id, CreateClothingItemRequest updatedItem);

    void deleteClothingItem(UUID id);


    // Listing and Filtering
    List<ClothingItemResponse> getAllClothingItems();

    List<ClothingItemResponse> getClothingItemsByCategory(Category category);

    List<ClothingItemResponse> getClothingItemsBySeason(Season season);

    List<ClothingItemResponse> getClothingItemsByColor(Color color);



}
