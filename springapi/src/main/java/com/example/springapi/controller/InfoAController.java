package com.example.springapi.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.springapi.model.InfoA;
import com.example.springapi.service.InfoAService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/informacaoadicional")
@CrossOrigin(origins = "*")

public class InfoAController {
    
        @Autowired
    private InfoAService infoAService;

    @GetMapping
    public List<InfoA> listarTodos() {
        return infoAService.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<InfoA> buscarPorId(@PathVariable int id) {
        Optional<InfoA> infoA = infoAService.buscarPorId(id);
        return infoA.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<InfoA> criarOuAtualizar(@RequestBody InfoA infoa) {
        InfoA salvo = infoAService.salvarOuAtualizar(infoa);
        return ResponseEntity.ok(salvo);
    }

    @PutMapping("/{id}")
    public ResponseEntity<InfoA> atualizar(@PathVariable int id, @RequestBody InfoA infoA) {
        if(!infoAService.buscarPorId(id).isPresent()){
            return ResponseEntity.notFound().build();
        }
        InfoA atualizado = infoAService.atualizar(id, infoA);
        return ResponseEntity.ok(atualizado);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable int id) {
        infoAService.deletar(id);
        return ResponseEntity.noContent().build();
    }

}
