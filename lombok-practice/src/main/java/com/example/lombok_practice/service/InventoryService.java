package com.example.lombok_practice.service;

import com.example.lombok_practice.model.InventoryItem;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class InventoryService {

    private final InventoryItem inventoryItem;

    public String getInventoryDetails() {
        return inventoryItem.toString();
    }
}