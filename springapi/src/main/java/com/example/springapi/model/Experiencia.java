package com.example.springapi.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "experiencia")

public class Experiencia {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idExp;

    @Column(name = "empresa", nullable = false)
    private String empresa;

    @Column(name = "inicio", nullable = false)
    private int inicio;
    
    @Column(name = "fim", nullable = false)
    private String fim;

    @Column(name = "funcao", nullable = false)
    private String funcao;
    
}
