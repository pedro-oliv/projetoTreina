package com.example.springapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springapi.model.Tecnico;

public interface TRepository extends JpaRepository<Tecnico, Integer>{
    
}
