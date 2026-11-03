package com.example.services;

import com.example.entity.User;
import com.example.repository.studentIntRepo;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class userServices {

    private studentIntRepo userRepo;

    public userServices(studentIntRepo userRepo){
        this.userRepo = userRepo;
    }




    public User createUserServ(User user){
         userRepo.save(user);
        return user;
    }

    public List<User> getAllUsers() {
        return userRepo.findAll();
    }


}
