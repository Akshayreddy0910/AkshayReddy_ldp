package com.example.spring_security_practice.config;

import javax.sql.DataSource;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.provisioning.JdbcUserDetailsManager;
import org.springframework.security.provisioning.UserDetailsManager;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public UserDetailsManager users(
            DataSource dataSource,
            PasswordEncoder passwordEncoder) {

        JdbcUserDetailsManager users =
                new JdbcUserDetailsManager(dataSource);

        if (!users.userExists("akshay")) {

            UserDetails user = User.builder()
                    .username("akshay")
                    .password(passwordEncoder.encode("password123"))
                    .roles("USER")
                    .build();

            users.createUser(user);
        }

        if (!users.userExists("admin")) {

            UserDetails admin = User.builder()
                    .username("admin")
                    .password(passwordEncoder.encode("admin123"))
                    .roles("ADMIN")
                    .build();

            users.createUser(admin);
        }

        return users;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(
            HttpSecurity http,
            CustomAccessDeniedHandler accessDeniedHandler)
            throws Exception {

        http
                .csrf(csrf -> csrf.disable())

                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/public", "/login").permitAll()
                        .requestMatchers("/admin").hasRole("ADMIN")
                        .requestMatchers("/students")
                        .hasAnyRole("USER", "ADMIN")
                        .anyRequest().authenticated()
                )

                .exceptionHandling(exception -> exception
                        .accessDeniedHandler(accessDeniedHandler)
                )

                .formLogin(form -> form
                        .loginPage("/login")
                        .defaultSuccessUrl("/students")
                        .failureUrl("/login?error")
                        .permitAll()
                )

                .rememberMe(remember -> remember
                        .tokenValiditySeconds(86400)
                        .key("spring-security-secret-key")
                )

                .sessionManagement(session -> session
                        .maximumSessions(1)
                )

                .logout(logout -> logout
                        .logoutUrl("/logout")
                        .logoutSuccessUrl("/login?logout")
                        .permitAll()
                );

        return http.build();
    }
}