package com.example.aop_practice.aspect;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class LoggingAspect {

    // 1. @Before
    @Before("execution(* com.example.aop_practice.service.*.*(..))")
    public void beforeMethod() {
        System.out.println("BEFORE: Method execution started");
    }

    // 2. @AfterReturning
    @AfterReturning(
            pointcut = "execution(* com.example.aop_practice.service.*.*(..))",
            returning = "result"
    )
    public void afterReturningMethod(Object result) {
        System.out.println("AFTER RETURNING: Result = " + result);
    }

    // 3. @AfterThrowing
    @AfterThrowing(
            pointcut = "execution(* com.example.aop_practice.service.*.*(..))",
            throwing = "exception"
    )
    public void afterThrowingMethod(Exception exception) {
        System.out.println("AFTER THROWING: Exception = " + exception.getMessage());
    }

    // 4. @After
    @After("execution(* com.example.aop_practice.service.*.*(..))")
    public void afterMethod() {
        System.out.println("AFTER: Method execution completed");
    }

    // 5. @Around
    @Around("execution(* com.example.aop_practice.service.*.*(..))")
    public Object aroundMethod(ProceedingJoinPoint joinPoint) throws Throwable {

        System.out.println("AROUND: Before method");

        long startTime = System.currentTimeMillis();

        Object result = joinPoint.proceed();

        long endTime = System.currentTimeMillis();

        System.out.println("AROUND: After method");
        System.out.println("Execution time: " + (endTime - startTime) + " ms");

        return result;
    }
}