package com.example.dto_practice.mapper;

import com.example.dto_practice.dto.AddressDto;
import com.example.dto_practice.dto.UserCreateRequestDto;
import com.example.dto_practice.dto.UserResponseDto;
import com.example.dto_practice.model.User;

public class UserMapper {

    public static User toUser(UserCreateRequestDto requestDto) {

        User user = new User();

        user.setUsername(requestDto.getUsername());
        user.setPassword(requestDto.getPassword());
        user.setEmail(requestDto.getEmail());

        return user;
    }

    public static UserResponseDto toResponseDto(User user) {

        UserResponseDto responseDto = new UserResponseDto();

        responseDto.setId(user.getId());
        responseDto.setUsername(user.getUsername());
        responseDto.setEmail(user.getEmail());

        AddressDto addressDto = new AddressDto();
        addressDto.setCity("Anantapur");
        addressDto.setState("Andhra Pradesh");

        responseDto.setAddress(addressDto);

        return responseDto;
    }
}