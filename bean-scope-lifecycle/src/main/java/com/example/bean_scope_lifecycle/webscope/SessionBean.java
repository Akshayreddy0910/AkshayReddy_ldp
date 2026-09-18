package com.example.bean_scope_lifecycle.webscope;

import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.stereotype.Component;

import static org.springframework.web.context.WebApplicationContext.SCOPE_SESSION;

@Component
@Scope(value = SCOPE_SESSION, proxyMode = ScopedProxyMode.TARGET_CLASS)
public class SessionBean {

    public SessionBean() {
        System.out.println("SessionBean object created");
    }

    public String getMessage() {
        return "Session scoped bean instance: " + this.hashCode();
    }
}