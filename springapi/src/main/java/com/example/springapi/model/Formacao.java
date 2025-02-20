package com.example.springapi.model;

import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
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
@Entity(name = "formacao")
@Inheritance(strategy = InheritanceType.JOINED)

public abstract class Formacao {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idForm;

    @Column(name = "ano", nullable = false)
    private int ano;

    @Column(name = "curso", nullable = false)
    private String curso;

    @Column(name = "ie", nullable = false)
    private String ie;

}
