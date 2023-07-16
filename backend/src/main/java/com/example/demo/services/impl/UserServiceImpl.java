package com.example.demo.services.impl;

import com.example.demo.dto.UserDto;
import com.example.demo.entities.User;
import com.example.demo.repos.UserRepo;
import com.example.demo.services.UserService;
import com.example.demo.utils.PasswordEncoderUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepo userRepo;

    @Override
    public boolean ifUserExists(String email) {
        return userRepo.existsByEmail(email);
    }
}
