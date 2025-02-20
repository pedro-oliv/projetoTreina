package com.example.springapi.model;

import lombok.Data;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor

public class PosGraduacao extends Formacao{
    
    @Column(name = "titulo", nullable = false)
    private String titulo;
    
}
