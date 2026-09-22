package com.example.spring_config_practice.controller;

import com.example.spring_config_practice.profile.DevelopmentService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EnvironmentController {

    private final DevelopmentService developmentService;

    public EnvironmentController(DevelopmentService developmentService) {
        this.developmentService = developmentService;
    }

    @GetMapping("/environment")
    public String getEnvironment() {
        return developmentService.getEnvironmentMessage();
    }
}