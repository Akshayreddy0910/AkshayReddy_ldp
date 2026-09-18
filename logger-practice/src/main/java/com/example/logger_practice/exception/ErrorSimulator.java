package com.example.logger_practice.exception;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class ErrorSimulator {

    private static final Logger logger =
            LoggerFactory.getLogger(ErrorSimulator.class);

    public String simulateError() {

        try {
            int result = 10 / 0;
            return "Result: " + result;

        } catch (ArithmeticException exception) {

            logger.error("An error occurred while performing the calculation", exception);

            return "Error handled successfully";
        }
    }
}