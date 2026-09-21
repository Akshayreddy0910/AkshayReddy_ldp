package com.example.lombok_practice.model;

import lombok.Value;

@Value
public class SystemConfig {

    String applicationName;
    String environment;
    String version;
}