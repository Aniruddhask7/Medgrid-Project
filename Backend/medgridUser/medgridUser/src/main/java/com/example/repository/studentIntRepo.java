package com.example.repository;

import com.example.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface studentIntRepo extends JpaRepository<User, Long> {




}
