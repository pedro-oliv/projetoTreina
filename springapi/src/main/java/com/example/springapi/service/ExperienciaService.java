package com.example.springapi.service;

import com.example.springapi.model.Experiencia;
import com.example.springapi.repository.ExperienciaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class ExperienciaService {

    @Autowired
    private ExperienciaRepository experienciaRepository;

    public List<Experiencia> listarTodos() {
        return experienciaRepository.findAll();
    }

    public Optional<Experiencia> buscarPorId(int id) {
        return experienciaRepository.findById(id);
    }

    public Experiencia salvar(Experiencia experiencia) {
        return experienciaRepository.save(experiencia);
    }

    public Experiencia atualizar(int id, Experiencia experiencia) {
        if (experienciaRepository.existsById(id)) {
            experiencia.setIdExp(id);
            return experienciaRepository.save(experiencia);
        }
        return null;
    }

    public void deletar(int id) {
        experienciaRepository.deleteById(id);
    }
    
}
