package com.example.springapi.service;

import com.example.springapi.model.PosGraduacao;
import com.example.springapi.repository.PGRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class PGService {
    
    @Autowired
    private PGRepository pgRepository;

    public List<PosGraduacao> listarTodos() {
        return pgRepository.findAll();
    }

    public Optional<PosGraduacao> buscarPorId(int id) {
        return pgRepository.findById(id);
    }

    public PosGraduacao salvar(PosGraduacao posgraduacao) {
        return pgRepository.save(posgraduacao);
    }

    public PosGraduacao atualizar(int id, PosGraduacao posgraduacao) {
        if (pgRepository.existsById(id)) {
            posgraduacao.setIdForm(id);
            return pgRepository.save(posgraduacao);
        }
        return null;
    }

    public void deletar(int id) {
        pgRepository.deleteById(id);
    }
    
}
