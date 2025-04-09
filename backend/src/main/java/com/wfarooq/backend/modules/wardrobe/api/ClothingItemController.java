package com.wfarooq.backend.modules.wardrobe.api;

import com.wfarooq.backend.common.dto.ResponseDto;
import com.wfarooq.backend.modules.wardrobe.application.IClothingService;
import com.wfarooq.backend.modules.wardrobe.constants.Category;
import com.wfarooq.backend.modules.wardrobe.constants.Color;
import com.wfarooq.backend.modules.wardrobe.constants.Season;
import com.wfarooq.backend.modules.wardrobe.dto.request.CreateClothingItemRequest;
import com.wfarooq.backend.modules.wardrobe.dto.response.ClothingItemResponse;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(value = "/api/v1/wardrobe/clothing", produces = {MediaType.APPLICATION_JSON_VALUE})
@Validated
public class ClothingItemController {

    private final IClothingService clothingService;

    public ClothingItemController(IClothingService clothingService) {
        this.clothingService = clothingService;
    }

    // CRUD

    @PostMapping
    public ResponseEntity<ClothingItemResponse> createClothingItem(
            @Valid @RequestBody CreateClothingItemRequest request
    ) {
        ClothingItemResponse response = clothingService.createClothingItem(request);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }


    @GetMapping("/{id}")
    public ResponseEntity<ClothingItemResponse> getClothingItemById(@PathVariable UUID id) {
        ClothingItemResponse response = clothingService.getClothingItemById(id);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }


    @PutMapping("/{id}")
    public ResponseEntity<ClothingItemResponse> updateClothingItem(
            @PathVariable UUID id,
            @Valid @RequestBody CreateClothingItemRequest request
    ) {
        ClothingItemResponse response = clothingService.updateClothingItem(id, request);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<ResponseDto> deleteClothingItem(@PathVariable UUID id) {
        clothingService.deleteClothingItem(id);
        return new ResponseEntity<>(new ResponseDto("201", "Clothing item deleted successfully"), HttpStatus.OK);
    }

    // Lists And Filtering
    @GetMapping
    public ResponseEntity<List<ClothingItemResponse>> getAllClothingItems() {
        List<ClothingItemResponse> items = clothingService.getAllClothingItems();
        return new ResponseEntity<>(items, HttpStatus.OK);
    }

    // GET items by category
    @GetMapping("/filter/category")
    public ResponseEntity<List<ClothingItemResponse>> getItemsByCategory(
            @RequestParam Category category
    ) {
        List<ClothingItemResponse> items = clothingService.getClothingItemsByCategory(category);
        return new ResponseEntity<>(items, HttpStatus.OK);
    }

    // GET items by season
    @GetMapping("/filter/season")
    public ResponseEntity<List<ClothingItemResponse>> getItemsBySeason(
            @RequestParam Season season
    ) {
        List<ClothingItemResponse> items = clothingService.getClothingItemsBySeason(season);
        return new ResponseEntity<>(items, HttpStatus.OK);
    }

    // GET items by color
    @GetMapping("/filter/color")
    public ResponseEntity<List<ClothingItemResponse>> getItemsByColor(
            @RequestParam Color color
    ) {
        List<ClothingItemResponse> items = clothingService.getClothingItemsByColor(color);
        return new ResponseEntity<>(items, HttpStatus.OK);
    }


}
