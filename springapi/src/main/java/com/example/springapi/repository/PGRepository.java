package com.example.springapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springapi.model.PosGraduacao;

public interface PGRepository extends JpaRepository<PosGraduacao, Integer>{
    
}
