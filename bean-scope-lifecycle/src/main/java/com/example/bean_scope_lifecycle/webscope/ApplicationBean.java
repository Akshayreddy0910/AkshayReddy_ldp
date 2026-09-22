package com.example.bean_scope_lifecycle.webscope;

import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.stereotype.Component;

import static org.springframework.web.context.WebApplicationContext.SCOPE_APPLICATION;

@Component
@Scope(value = SCOPE_APPLICATION, proxyMode = ScopedProxyMode.TARGET_CLASS)
public class ApplicationBean {

    public ApplicationBean() {
        System.out.println("ApplicationBean object created");
    }

    public String getMessage() {
        return "Application scoped bean instance: " + this.hashCode();
    }
}