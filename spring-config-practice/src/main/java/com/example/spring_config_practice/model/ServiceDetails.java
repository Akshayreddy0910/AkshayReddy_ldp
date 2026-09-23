package com.example.spring_config_practice.model;

public class ServiceDetails {

    private String serviceName;
    private String version;

    public ServiceDetails(String serviceName, String version) {
        this.serviceName = serviceName;
        this.version = version;
    }

    public String getServiceName() {
        return serviceName;
    }

    public String getVersion() {
        return version;
    }

    @Override
    public String toString() {
        return "ServiceDetails{" +
                "serviceName='" + serviceName + '\'' +
                ", version='" + version + '\'' +
                '}';
    }
}