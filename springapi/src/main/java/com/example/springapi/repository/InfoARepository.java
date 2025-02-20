package com.example.springapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springapi.model.InfoA;

public interface InfoARepository extends JpaRepository<InfoA, Integer>{
    
}
