package com.example.springpractice;

import org.springframework.stereotype.Component;

@Component("dieselEngine")
public class DieselEngine extends Engine {

    @Override
    public void start() {
        System.out.println("Diesel engine started");
    }
}