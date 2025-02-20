package com.example.springapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springapi.model.Identificacao;

public interface IdentificacaoRepository extends JpaRepository<Identificacao, Integer>{
    
}
