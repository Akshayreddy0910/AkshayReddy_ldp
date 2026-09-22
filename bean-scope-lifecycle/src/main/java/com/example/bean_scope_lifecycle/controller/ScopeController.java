package com.example.bean_scope_lifecycle.controller;

import com.example.bean_scope_lifecycle.webscope.ApplicationBean;
import com.example.bean_scope_lifecycle.webscope.RequestBean;
import com.example.bean_scope_lifecycle.webscope.SessionBean;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ScopeController {

    private final RequestBean requestBean;
    private final SessionBean sessionBean;
    private final ApplicationBean applicationBean;

    public ScopeController(
            RequestBean requestBean,
            SessionBean sessionBean,
            ApplicationBean applicationBean) {

        this.requestBean = requestBean;
        this.sessionBean = sessionBean;
        this.applicationBean = applicationBean;
    }

    @GetMapping("/request")
    public String requestScope() {
        return requestBean.getMessage();
    }

    @GetMapping("/session")
    public String sessionScope() {
        return sessionBean.getMessage();
    }

    @GetMapping("/application")
    public String applicationScope() {
        return applicationBean.getMessage();
    }
}