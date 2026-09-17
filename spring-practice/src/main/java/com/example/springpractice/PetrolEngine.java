package com.example.springpractice;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

@Component("petrolEngine")
@Primary
public class PetrolEngine extends Engine {

    @Override
    public void start() {
        System.out.println("Petrol engine started");
    }
}