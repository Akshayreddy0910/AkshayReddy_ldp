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

    @PutMapping("/{id}")
    public UserResponseDto updateUser(
            @PathVariable int id,
            @Valid @RequestBody UserCreateRequestDto requestDto) {

        User user = UserMapper.toUser(requestDto);

        user.setId(id);

        return UserMapper.toResponseDto(user);
    }

    @PatchMapping("/{id}")
    public UserResponseDto partialUpdateUser(
            @PathVariable int id,
            @RequestBody UserCreateRequestDto requestDto) {

        User user = UserMapper.toUser(requestDto);

        user.setId(id);

        return UserMapper.toResponseDto(user);
    }

    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable int id) {

        return "User with id " + id + " deleted successfully";
    }
}