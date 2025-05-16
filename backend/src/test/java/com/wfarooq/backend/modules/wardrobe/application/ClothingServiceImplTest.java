package com.wfarooq.backend.modules.wardrobe.application;

import com.wfarooq.backend.common.exception.ResourceAlreadyExistsException;
import com.wfarooq.backend.common.exception.ResourceNotFoundException;
import com.wfarooq.backend.infrastructure.storage.S3FileStorageServiceImpl;
import com.wfarooq.backend.modules.wardrobe.constants.Category;
import com.wfarooq.backend.modules.wardrobe.constants.Color;
import com.wfarooq.backend.modules.wardrobe.constants.Season;
import com.wfarooq.backend.modules.wardrobe.domain.ClothingItem;
import com.wfarooq.backend.modules.wardrobe.dto.request.CreateClothingItemRequest;
import com.wfarooq.backend.modules.wardrobe.dto.response.ClothingItemResponse;
import com.wfarooq.backend.modules.wardrobe.repository.ClothingItemRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.context.annotation.Profile;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;
@Profile(value = "test")
@ExtendWith(MockitoExtension.class)
public class ClothingServiceImplTest {

    @InjectMocks
    private ClothingServiceImpl clothingService;

    @Mock
    private ClothingItemRepository clothingItemRepository;

    @Mock
    private S3FileStorageServiceImpl s3Service;


    // ========================= CREATE =========================
    @Test
    void createClothingItem_validRequest_shouldReturnResponse() throws IOException {
        CreateClothingItemRequest request = new CreateClothingItemRequest(
                "Black Hoodie", "Soft and minimal", Category.TOP, Season.WINTER, Color.BLACK
        );

        MultipartFile mockImage = new MockMultipartFile(
                "image", "hoodie.jpg", "image/jpeg", "dummy-content".getBytes()
        );

        UUID itemId = UUID.randomUUID();
        ClothingItem saved = new ClothingItem(
                request.getName(), request.getDescription(),
                request.getCategory(), request.getSeason(), request.getColor()
        );
        saved.setId(itemId);
        saved.setImageURL("https://s3.amazonaws.com/your-bucket/hoodie.jpg");

        // Mock behavior
        when(clothingItemRepository.existsByName(request.getName())).thenReturn(false);
        when(s3Service.uploadFile(mockImage)).thenReturn("https://s3.amazonaws.com/your-bucket/hoodie.jpg");
        when(clothingItemRepository.save(any(ClothingItem.class))).thenReturn(saved);

        // Call service
        ClothingItemResponse result = clothingService.createClothingItem(request, mockImage);

        // Assertions
        assertEquals(request.getName(), result.getName());
        assertEquals(request.getColor(), result.getColor());
        assertEquals("https://s3.amazonaws.com/your-bucket/hoodie.jpg", result.getImageUrl());

        // Verifications
        verify(s3Service).uploadFile(mockImage);
        verify(clothingItemRepository).save(any(ClothingItem.class));
    }

    @Test
    void createClothingItem_duplicateName_shouldThrowException() {
        CreateClothingItemRequest request = new CreateClothingItemRequest(
                "Black Hoodie", "Soft and minimal", Category.TOP, Season.WINTER, Color.BLACK
        );

        MultipartFile dummyImage = new MockMultipartFile(
                "image", "hoodie.jpg", "image/jpeg", "dummy".getBytes()
        );

        when(clothingItemRepository.existsByName(request.getName())).thenReturn(true);

        assertThrows(ResourceAlreadyExistsException.class,
                () -> clothingService.createClothingItem(request, dummyImage));

        verify(clothingItemRepository, never()).save(any());
        verify(s3Service, never()).uploadFile(any());
    }


    // ========================= READ =========================

    @Test
    void getClothingItemById_existingId_shouldReturnItem() {
        UUID id = UUID.randomUUID();
        ClothingItem item = new ClothingItem("Tee", "Basic", Category.TOP, Season.SUMMER, Color.WHITE);
        item.setId(id);

        when(clothingItemRepository.findById(id)).thenReturn(Optional.of(item));

        ClothingItemResponse response = clothingService.getClothingItemById(id);

        assertEquals("Tee", response.getName());
        assertEquals(Color.WHITE, response.getColor());
    }

    @Test
    void getClothingItemById_notFound_shouldThrow() {
        UUID id = UUID.randomUUID();

        when(clothingItemRepository.findById(id)).thenReturn(Optional.empty());

        assertThrows(ResourceNotFoundException.class,
                () -> clothingService.getClothingItemById(id));
    }

    // ========================= UPDATE =========================

    @Test
    void updateClothingItem_valid_shouldReturnUpdatedItem() {
        UUID id = UUID.randomUUID();
        ClothingItem existing = new ClothingItem("Old", "Old desc", Category.BOTTOM, Season.SPRING, Color.BLUE);
        existing.setId(id);

        CreateClothingItemRequest updated = new CreateClothingItemRequest(
                "New Pants", "Updated desc", Category.BOTTOM, Season.WINTER, Color.BLACK
        );

        when(clothingItemRepository.findById(id)).thenReturn(Optional.of(existing));
        when(clothingItemRepository.save(any(ClothingItem.class))).thenReturn(existing);

        ClothingItemResponse response = clothingService.updateClothingItem(id, updated);

        assertEquals("New Pants", response.getName());
        assertEquals(Color.BLACK, response.getColor());
    }

    @Test
    void updateClothingItem_notFound_shouldThrow() {
        UUID id = UUID.randomUUID();
        CreateClothingItemRequest updated = new CreateClothingItemRequest(
                "Shirt", "Desc", Category.TOP, Season.SUMMER, Color.RED
        );

        when(clothingItemRepository.findById(id)).thenReturn(Optional.empty());

        assertThrows(ResourceNotFoundException.class,
                () -> clothingService.updateClothingItem(id, updated));
    }

    // ========================= DELETE =========================

    @Test
    void deleteClothingItem_existing_shouldSucceed() {
        UUID id = UUID.randomUUID();
        ClothingItem item = new ClothingItem("Shoes", "Nice", Category.SHOES, Season.AUTUMN, Color.BROWN);
        item.setId(id);

        when(clothingItemRepository.findById(id)).thenReturn(Optional.of(item));

        assertDoesNotThrow(() -> clothingService.deleteClothingItem(id));
        verify(clothingItemRepository).delete(item);
    }

    @Test
    void deleteClothingItem_notFound_shouldThrow() {
        UUID id = UUID.randomUUID();
        when(clothingItemRepository.findById(id)).thenReturn(Optional.empty());

        assertThrows(ResourceNotFoundException.class,
                () -> clothingService.deleteClothingItem(id));
    }

    // ========================= FILTERS =========================

    @Test
    void getAllClothingItems_shouldReturnList() {
        List<ClothingItem> items = List.of(
                new ClothingItem("Shirt", "desc", Category.TOP, Season.SUMMER, Color.WHITE)
        );
        when(clothingItemRepository.findAll()).thenReturn(items);

        List<ClothingItemResponse> result = clothingService.getAllClothingItems("harry");
        assertEquals(1, result.size());
    }

    @Test
    void getByCategory_shouldReturnFilteredList() {
        List<ClothingItem> items = List.of(
                new ClothingItem("Hat", "Wool", Category.ACCESSORY, Season.WINTER, Color.BLACK)
        );
        when(clothingItemRepository.findByCategory(Category.ACCESSORY)).thenReturn(items);

        List<ClothingItemResponse> result = clothingService.getClothingItemsByCategory(Category.ACCESSORY);
        assertEquals(1, result.size());
        assertEquals("Hat", result.getFirst().getName());
    }

    @Test
    void getBySeason_shouldReturnFilteredList() {
        List<ClothingItem> items = List.of(
                new ClothingItem("Coat", "Warm", Category.OUTERWEAR, Season.WINTER, Color.GRAY)
        );
        when(clothingItemRepository.findBySeason(Season.WINTER)).thenReturn(items);

        List<ClothingItemResponse> result = clothingService.getClothingItemsBySeason(Season.WINTER);
        assertEquals(1, result.size());
    }

    @Test
    void getByColor_shouldReturnFilteredList() {
        List<ClothingItem> items = List.of(
                new ClothingItem("Sneakers", "Clean", Category.SHOES, Season.ALL_SEASONS, Color.WHITE)
        );
        when(clothingItemRepository.findByColor(Color.WHITE)).thenReturn(items);

        List<ClothingItemResponse> result = clothingService.getClothingItemsByColor(Color.WHITE);
        assertEquals(1, result.size());
    }
}
