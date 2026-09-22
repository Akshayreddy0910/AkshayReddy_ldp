package com.example.spring_config_practice.profile;

import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Service;

@Service
@Profile("prod")
public class ProductionService {

    public String getEnvironmentMessage() {
        return "Production environment is active";
    }
}