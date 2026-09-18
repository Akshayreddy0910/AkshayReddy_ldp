package com.example.bean_scope_lifecycle.beans;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
@Scope("singleton")
public class DemoBean {

    public DemoBean() {
        System.out.println("DemoBean object created");
    }

    public void showMessage() {
        System.out.println("DemoBean is working");
    }
}