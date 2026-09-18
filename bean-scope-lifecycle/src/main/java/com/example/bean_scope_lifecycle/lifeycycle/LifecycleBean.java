package com.example.bean_scope_lifecycle.lifecycle;

import jakarta.annotation.PostConstruct;
import jakarta.annotation.PreDestroy;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.DisposableBean;

public class LifecycleBean implements InitializingBean, DisposableBean {

    public LifecycleBean() {
        System.out.println("1. Constructor - bean instantiated");
    }

    @PostConstruct
    public void postConstruct() {
        System.out.println("2. @PostConstruct - initialization");
    }

    @Override
    public void afterPropertiesSet() {
        System.out.println("3. afterPropertiesSet() - initialization");
    }

    public void customInit() {
        System.out.println("4. Custom init method");
    }

    @PreDestroy
    public void preDestroy() {
        System.out.println("5. @PreDestroy - destruction");
    }

    @Override
    public void destroy() {
        System.out.println("6. destroy() - destruction");
    }

    public void customDestroy() {
        System.out.println("7. Custom destroy method");
    }
}