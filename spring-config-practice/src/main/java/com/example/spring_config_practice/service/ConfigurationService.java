package com.example.spring_config_practice.service;

import com.example.spring_config_practice.model.ServiceDetails;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;

@Service
public class ConfigurationService {

    private final ServiceDetails serviceDetails;
    private final String serviceDescription;
    private final Environment environment;

    public ConfigurationService(
            ServiceDetails serviceDetails,
            String serviceDescription,
            Environment environment) {

        this.serviceDetails = serviceDetails;
        this.serviceDescription = serviceDescription;
        this.environment = environment;
    }

    public String getDetails() {
        return serviceDetails.toString();
    }

    public String getDescription() {
        return serviceDescription;
    }

    public String getApplicationConfiguration() {

        String applicationName =
                environment.getProperty("app.name");

        String applicationVersion =
                environment.getProperty("app.version");

        String applicationEnvironment =
                environment.getProperty("app.environment");

        return "Application Name: " + applicationName
                + ", Version: " + applicationVersion
                + ", Environment: " + applicationEnvironment;
    }
}