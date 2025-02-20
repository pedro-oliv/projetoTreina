package com.example.springapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springapi.model.Graduacao;

public interface GRepository extends JpaRepository<Graduacao, Integer>{
    
}
