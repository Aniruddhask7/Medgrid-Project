package com.example.controller;

import com.example.entity.User;
import com.example.services.userServices;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "http://localhost:5173")
public class userController {

    private userServices userServ;

    public userController(userServices userServ){
        this.userServ = userServ;
    }


    @PostMapping("/create")
    public ResponseEntity<String> createUser(@RequestBody User user){
        userServ.createUserServ(user);

        return ResponseEntity.status(HttpStatus.CREATED).body("User Created Successfully");
    }



    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {

        List<User> users = userServ.getAllUsers();

        return ResponseEntity.ok(users);
    }
    




}
