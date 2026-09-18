package com.example.logger_practice.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class ActivityLogger {

    private static final Logger logger =
            LoggerFactory.getLogger(ActivityLogger.class);

    public String performAction() {

        logger.trace("Trace message: action execution started");
        logger.debug("Debug message: preparing action");
        logger.info("Info message: action executed successfully");
        logger.warn("Warning message: action completed with a warning");

        return "Action completed successfully";
    }

    public String processActivity(String username) {

        logger.info("Processing activity for user: {}", username);
        logger.debug("Activity processing started for user: {}", username);

        String result = "Activity processed for " + username;

        logger.info("Activity processing completed for user: {}", username);

        return result;
    }
}