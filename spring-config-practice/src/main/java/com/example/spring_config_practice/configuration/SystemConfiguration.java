package com.example.spring_config_practice.configuration;

import com.example.spring_config_practice.model.ServiceDetails;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@Import(DatabaseConfiguration.class)
public class SystemConfiguration {

    @Bean
    public ServiceDetails serviceDetails() {
        return new ServiceDetails(
                "Configuration Service",
                "1.0"
        );
    }

    @Bean
    public String serviceDescription(ServiceDetails serviceDetails) {
        return serviceDetails.getServiceName()
                + " is running with version "
                + serviceDetails.getVersion();
    }
}