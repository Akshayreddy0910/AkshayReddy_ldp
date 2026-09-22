package com.example.spring_config_practice.controller;

import com.example.spring_config_practice.service.ConfigurationService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ConfigurationController {

    private final ConfigurationService configurationService;

    public ConfigurationController(
            ConfigurationService configurationService) {

        this.configurationService = configurationService;
    }

    @GetMapping("/configuration")
    public String getConfiguration() {
        return configurationService.getDetails();
    }

    @GetMapping("/description")
    public String getDescription() {
        return configurationService.getDescription();
    }

    @GetMapping("/app-config")
    public String getApplicationConfiguration() {
        return configurationService.getApplicationConfiguration();
    }
}