package com.example.springapi.service;

import com.example.springapi.model.InfoA;
import com.example.springapi.repository.InfoARepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class InfoAService {
    
    @Autowired
    private InfoARepository infoARepository;

    public List<InfoA> listarTodos() {
        return infoARepository.findAll();
    }

    public Optional<InfoA> buscarPorId(int id) {
        return infoARepository.findById(id);
    }

    public InfoA salvarOuAtualizar(InfoA infoA){
        List<InfoA> lista = infoARepository.findAll();

        if (!lista.isEmpty()){
            InfoA existente = lista.get(0);
            infoA.setIdInfo(existente.getIdInfo());
            return infoARepository.save(infoA);
        } else {
            return infoARepository.save(infoA);
        }
    }

    public InfoA salvar(InfoA infoA) {
        return infoARepository.save(infoA);
    }

    public InfoA atualizar(int id, InfoA infoA) {
        if (infoARepository.existsById(id)) {
            infoA.setIdInfo(id);
            return infoARepository.save(infoA);
        }
        return null;
    }

    public void deletar(int id) {
        infoARepository.deleteById(id);
    }
}
