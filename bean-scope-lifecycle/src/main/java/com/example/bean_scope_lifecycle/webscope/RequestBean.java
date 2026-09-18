package com.example.bean_scope_lifecycle.webscope;

import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.stereotype.Component;

import static org.springframework.web.context.WebApplicationContext.SCOPE_REQUEST;

@Component
@Scope(value = SCOPE_REQUEST, proxyMode = ScopedProxyMode.TARGET_CLASS)
public class RequestBean {

    public RequestBean() {
        System.out.println("RequestBean object created");
    }

    public String getMessage() {
        return "Request scoped bean instance: " + this.hashCode();
    }
}