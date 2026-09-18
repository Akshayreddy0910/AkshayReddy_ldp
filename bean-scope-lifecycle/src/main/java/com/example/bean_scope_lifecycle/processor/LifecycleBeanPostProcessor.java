package com.example.bean_scope_lifecycle.processor;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.config.BeanPostProcessor;
import org.springframework.stereotype.Component;

@Component
public class LifecycleBeanPostProcessor implements BeanPostProcessor {

    @Override
    public Object postProcessBeforeInitialization(
            Object bean,
            String beanName) throws BeansException {

        if (beanName.equals("lifecycleBean")) {
            System.out.println("BeanPostProcessor - before initialization");
        }

        return bean;
    }

    @Override
    public Object postProcessAfterInitialization(
            Object bean,
            String beanName) throws BeansException {

        if (beanName.equals("lifecycleBean")) {
            System.out.println("BeanPostProcessor - after initialization");
        }

        return bean;
    }
}