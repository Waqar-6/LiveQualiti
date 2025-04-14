package com.wfarooq.backend.modules.wardrobe.application;

import com.wfarooq.backend.common.exception.ResourceAlreadyExistsException;
import com.wfarooq.backend.common.exception.ResourceNotFoundException;
import com.wfarooq.backend.infrastructure.storage.FileStorageService;
import com.wfarooq.backend.modules.wardrobe.constants.Category;
import com.wfarooq.backend.modules.wardrobe.constants.Color;
import com.wfarooq.backend.modules.wardrobe.constants.Season;
import com.wfarooq.backend.modules.wardrobe.domain.ClothingItem;
import com.wfarooq.backend.modules.wardrobe.dto.request.CreateClothingItemRequest;
import com.wfarooq.backend.modules.wardrobe.dto.response.ClothingItemResponse;
import com.wfarooq.backend.modules.wardrobe.mapper.ClothingItemMapper;
import com.wfarooq.backend.modules.wardrobe.repository.ClothingItemRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.time.Duration;
import java.time.Instant;
import java.util.List;
import java.util.UUID;
@Service
public class ClothingServiceImpl implements IClothingService{

    private final ClothingItemRepository clothingItemRepository;
    private final FileStorageService fileStorageService;
    private static final Logger logger = LoggerFactory.getLogger(ClothingServiceImpl.class);

    public ClothingServiceImpl(ClothingItemRepository clothingItemRepository, FileStorageService fileStorageService) {
        this.clothingItemRepository = clothingItemRepository;
        this.fileStorageService = fileStorageService;
    }


    @Override
    public ClothingItemResponse createClothingItem(CreateClothingItemRequest request, MultipartFile file) {
        Instant start = Instant.now();
        logger.info("[CREATE] Creating clothing item : {}", request);


        if (clothingItemRepository.existsByName(request.getName())) {
            logger.warn("[CREATE] Clothing item already exists with the name : {}", request.getName());
            throw new ResourceAlreadyExistsException("Clothing item", "name", request.getName());
        }

        ClothingItem item = ClothingItemMapper.toEntity(request, new ClothingItem());
        String imageUrl = fileStorageService.uploadFile(file);
        item.setImageURL(imageUrl);
        logger.info("[CREATE] Clothing item image uploaded to s3 url : {}", imageUrl);



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


    @Override
    public List<ClothingItemResponse> getAllClothingItems() {
        Instant start = Instant.now();
        logger.info("[READ] Fetching all clothing items");

        List<ClothingItem> items = clothingItemRepository.findAll();

        logger.debug("[READ] Total items fetched: {}", items.size());
        logger.info("[METRIC] Fetched all items in {}ms", Duration.between(start, Instant.now()).toMillis());

        return items.stream()
                .map(item -> ClothingItemMapper.toResponse(item, new ClothingItemResponse()))
                .toList();
    }

    @Override
    public List<ClothingItemResponse> getClothingItemsByCategory(Category category) {
        Instant start = Instant.now();
        logger.info("[READ] Fetching clothing items by category: {}", category);

        List<ClothingItem> items = clothingItemRepository.findByCategory(category);

        logger.debug("[READ] Items found: {}", items.size());
        logger.info("[METRIC] Fetched items by category in {}ms", Duration.between(start, Instant.now()).toMillis());

        return items.stream()
                .map(item -> ClothingItemMapper.toResponse(item, new ClothingItemResponse()))
                .toList();
    }

    @Override
    public List<ClothingItemResponse> getClothingItemsBySeason(Season season) {
        Instant start = Instant.now();
        logger.info("[READ] Fetching clothing items by season: {}", season);

        List<ClothingItem> items = clothingItemRepository.findBySeason(season);

        logger.debug("[READ] Items found: {}", items.size());
        logger.info("[METRIC] Fetched items by season in {}ms", Duration.between(start, Instant.now()).toMillis());

        return items.stream()
                .map(item -> ClothingItemMapper.toResponse(item, new ClothingItemResponse()))
                .toList();
    }

    @Override
    public List<ClothingItemResponse> getClothingItemsByColor(Color color) {
        Instant start = Instant.now();
        logger.info("[READ] Fetching clothing items by color: {}", color);

        List<ClothingItem> items = clothingItemRepository.findByColor(color);

        logger.debug("[READ] Items found: {}", items.size());
        logger.info("[METRIC] Fetched items by color in {}ms", Duration.between(start, Instant.now()).toMillis());

        return items.stream()
                .map(item -> ClothingItemMapper.toResponse(item, new ClothingItemResponse()))
                .toList();
    }
}
