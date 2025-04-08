package com.wfarooq.backend.modules.wardrobe.application;

import com.wfarooq.backend.common.exception.ResourceNotFoundException;
import com.wfarooq.backend.modules.wardrobe.domain.ClothingItem;
import com.wfarooq.backend.modules.wardrobe.dto.request.CreateClothingItemRequest;
import com.wfarooq.backend.modules.wardrobe.dto.response.ClothingItemResponse;
import com.wfarooq.backend.modules.wardrobe.mapper.ClothingItemMapper;
import com.wfarooq.backend.modules.wardrobe.repository.ClothingItemRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.time.Duration;
import java.time.Instant;
import java.util.UUID;

public class ClothingServiceImpl implements IClothingService{

    private final ClothingItemRepository clothingItemRepository;
    private static final Logger logger = LoggerFactory.getLogger(ClothingServiceImpl.class);

    public ClothingServiceImpl(ClothingItemRepository clothingItemRepository) {
        this.clothingItemRepository = clothingItemRepository;
    }


    @Override
    public ClothingItemResponse createClothingItem(CreateClothingItemRequest request, UUID userId) {
        Instant start = Instant.now();
        logger.info("[CREATE] Creating clothing item for user: {}", userId);

        ClothingItem item = ClothingItemMapper.toEntity(request, new ClothingItem());


        ClothingItem saved = clothingItemRepository.save(item);

        logger.debug("[CREATE] ClothingItem saved: {}", saved);
        logger.info("[METRIC] Created item in {}ms", Duration.between(start, Instant.now()).toMillis());

        return ClothingItemMapper.toResponse(saved, new ClothingItemResponse());
    }

    @Override
    public ClothingItemResponse getClothingItemById(UUID id) {
        Instant start = Instant.now();
        logger.info("[READ] Fetching clothing item with ID: {}", id);

        ClothingItem item = clothingItemRepository.findById(id)
                .orElseThrow(() -> {
                    logger.warn("[READ] Clothing item not found with ID: {}", id);
                    return new ResourceNotFoundException("Clothing item", "id", id.toString());
                });

        logger.debug("[READ] Found clothing item: {}", item);
        logger.info("[METRIC] Retrieved item in {}ms", Duration.between(start, Instant.now()).toMillis());

        return ClothingItemMapper.toResponse(item, new ClothingItemResponse());
    }

    @Override
    public ClothingItemResponse updateClothingItem(UUID id, CreateClothingItemRequest updatedItem) {
        Instant start = Instant.now();
        logger.info("[UPDATE] Updating clothing item with ID: {}", id);

        ClothingItem item = clothingItemRepository.findById(id)
                .orElseThrow(() -> {
                    logger.warn("[UPDATE] Clothing item not found with ID: {}", id);
                    return new ResourceNotFoundException("Clothing item", "id", id.toString());
                });


        ClothingItemMapper.toEntity(updatedItem, item);


        ClothingItem updated = clothingItemRepository.save(item);

        logger.debug("[UPDATE] Updated clothing item: {}", updated);
        logger.info("[METRIC] Updated item in {}ms", Duration.between(start, Instant.now()).toMillis());

        return ClothingItemMapper.toResponse(updated, new ClothingItemResponse());
    }

    @Override
    public void deleteClothingItem(UUID id) {
        Instant start = Instant.now();
        logger.info("[DELETE] Deleting clothing item with ID: {}", id);

        ClothingItem item = clothingItemRepository.findById(id)
                .orElseThrow(() -> {
                    logger.warn("[DELETE] Clothing item not found with ID: {}", id);
                    return new ResourceNotFoundException("Clothing item", "id", id.toString());
                });

        clothingItemRepository.delete(item);
        logger.info("[DELETE] Deleted clothing item with ID: {}", id);
        logger.info("[METRIC] Deleted item in {}ms", Duration.between(start, Instant.now()).toMillis());
    }
}
