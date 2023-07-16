package com.example.demo.services;

import com.example.demo.dto.UserDto;
import com.example.demo.entities.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
    boolean ifUserExists(String email);
}
