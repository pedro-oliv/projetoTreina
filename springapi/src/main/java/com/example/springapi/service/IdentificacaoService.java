package com.example.springapi.service;

import com.example.springapi.model.Identificacao;
import com.example.springapi.repository.IdentificacaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class IdentificacaoService {
    
    @Autowired
    private IdentificacaoRepository identificacaoRepository;

    public List<Identificacao> listarTodos() {
        return identificacaoRepository.findAll();
    }

    public Optional<Identificacao> buscarPorId(int id) {
        return identificacaoRepository.findById(id);
    }

    public Identificacao salvarOuAtualizar(Identificacao identificacao) {
        List<Identificacao> lista = identificacaoRepository.findAll();
        
        if (!lista.isEmpty()) {
            Identificacao existente = lista.get(0);
            identificacao.setIdIdent(existente.getIdIdent()); 
            return identificacaoRepository.save(identificacao);
        } else {
            return identificacaoRepository.save(identificacao); 
        }
    }
    

    public Identificacao salvar(Identificacao identificacao) {
        return identificacaoRepository.save(identificacao);
    }

    public Identificacao atualizar(int id, Identificacao identificacao) {
        if (identificacaoRepository.existsById(id)) {
            identificacao.setIdIdent(id);
            return identificacaoRepository.save(identificacao);
        }
        return null;
    }

    public void deletar(int id) {
        identificacaoRepository.deleteById(id);
    }
}
