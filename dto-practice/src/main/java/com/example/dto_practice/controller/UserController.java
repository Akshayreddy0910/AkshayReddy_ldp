package com.example.dto_practice.controller;

import com.example.dto_practice.dto.UserCreateRequestDto;
import com.example.dto_practice.dto.UserResponseDto;
import com.example.dto_practice.mapper.UserMapper;
import com.example.dto_practice.model.User;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @PostMapping
    public UserResponseDto createUser(
            @Valid @RequestBody UserCreateRequestDto requestDto) {

        User user = UserMapper.toUser(requestDto);

        user.setId(101);

        return UserMapper.toResponseDto(user);
    }
}