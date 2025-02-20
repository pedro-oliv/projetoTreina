package com.example.springapi.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springapi.model.Tecnico;
import com.example.springapi.repository.TRepository;

@Service

public class TService {
    
    @Autowired
    private TRepository tRepository;

    public List<Tecnico> listarTodos() {
        return tRepository.findAll();
    }

    public Optional<Tecnico> buscarPorId(int id) {
        return tRepository.findById(id);
    }

    public Tecnico salvar(Tecnico tecnico) {
        return tRepository.save(tecnico);
    }

    public Tecnico atualizar(int id, Tecnico tecnico) {
        if (tRepository.existsById(id)) {
            tecnico.setIdForm(id);
            return tRepository.save(tecnico);
        }
        return null;
    }

    public void deletar(int id) {
        tRepository.deleteById(id);
    }

}
