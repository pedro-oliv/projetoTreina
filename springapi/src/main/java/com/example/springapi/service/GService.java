package com.example.springapi.service;

import com.example.springapi.model.Graduacao;
import com.example.springapi.repository.GRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class GService {
    
    @Autowired
    private GRepository gRepository;

    public List<Graduacao> listarTodos() {
        return gRepository.findAll();
    }

    public Optional<Graduacao> buscarPorId(int id) {
        return gRepository.findById(id);
    }

    public Graduacao salvar(Graduacao graduacao) {
        return gRepository.save(graduacao);
    }

    public Graduacao atualizar(int id, Graduacao graducao) {
        if (gRepository.existsById(id)) {
            graducao.setIdForm(id);
            return gRepository.save(graducao);
        }
        return null;
    }

    public void deletar(int id) {
        gRepository.deleteById(id);
    }

}
