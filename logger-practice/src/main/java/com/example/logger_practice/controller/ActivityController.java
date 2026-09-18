package com.example.logger_practice.controller;

import com.example.logger_practice.exception.ErrorSimulator;
import com.example.logger_practice.service.ActivityLogger;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ActivityController {

    private static final Logger logger =
            LoggerFactory.getLogger(ActivityController.class);

    private final ActivityLogger activityLogger;
    private final ErrorSimulator errorSimulator;

    public ActivityController(
            ActivityLogger activityLogger,
            ErrorSimulator errorSimulator) {

        this.activityLogger = activityLogger;
        this.errorSimulator = errorSimulator;
    }

    @GetMapping("/activity")
    public String activity() {

        logger.info("Activity request received");

        return activityLogger.performAction();
    }

    @GetMapping("/simulate-error")
    public String simulateError() {

        logger.info("Error simulation request received");

        return errorSimulator.simulateError();
    }

    @GetMapping("/process")
    public String process(@RequestParam String username) {

        logger.info("Process request received for user: {}", username);

        return activityLogger.processActivity(username);
    }
}