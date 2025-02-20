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
@Entity(name = "infoadicional")

public class InfoA {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idInfo;

    @Column(name = "github", nullable = true)
    private String github;

    @Column(name = "linkedin", nullable = true)
    private String linkedin;

    @Column(name = "instagram", nullable = true)
    private String instagram;

    @Column(name = "email", nullable = true)
    private String email;

}
