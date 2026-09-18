package com.example.bean_scope_lifecycle.config;

import com.example.bean_scope_lifecycle.lifecycle.LifecycleBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class BeanLifecycleConfig {

    @Bean(
            initMethod = "customInit",
            destroyMethod = "customDestroy"
    )
    public LifecycleBean lifecycleBean() {
        return new LifecycleBean();
    }
}