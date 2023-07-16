package com.example.demo.controllers;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DataController {

    @GetMapping("/data")
    public List<String> getData() {
        return List.of("Prasanna", "Kaif");
    }

}
