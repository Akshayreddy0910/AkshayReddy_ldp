package com.example.lombok_practice.Controller;

import com.example.lombok_practice.model.InventoryItem;
import com.example.lombok_practice.model.OrderDetails;
import com.example.lombok_practice.service.InventoryService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class InventoryController {

    private final InventoryService inventoryService;

    public InventoryController(InventoryService inventoryService) {
        this.inventoryService = inventoryService;
    }

    @GetMapping("/item")
    public String getItem() {

        InventoryItem item = new InventoryItem();

        item.setItemId(101);
        item.setItemName("Laptop");
        item.setPrice(75000);

        return item.toString();
    }

    @GetMapping("/order")
    public String getOrder() {

        OrderDetails order = OrderDetails.builder()
                .orderId(501)
                .customerName("Akshay")
                .productName("Laptop")
                .amount(75000)
                .build();

        return order.toString();
    }

    @GetMapping("/inventory")
    public String getInventory() {

        return inventoryService.getInventoryDetails();
    }
}