package com.example.spring_boot_testing_practice.exception;

import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

class GlobalExceptionHandlerTest {

    @Test
    void shouldCreateGlobalExceptionHandler() {

        GlobalExceptionHandler handler =
                new GlobalExceptionHandler();

        assertThat(handler).isNotNull();
    }
}