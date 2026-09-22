package com.example.spring_config_practice.profile;

import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Service;

@Service
@Profile("dev")
public class DevelopmentService {

    public String getEnvironmentMessage() {
        return "Development environment is active";
    }
}