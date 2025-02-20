package com.example.springapi.controller;

import com.example.springapi.service.GService;
import com.example.springapi.model.Graduacao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/formacao/graduacao")
@CrossOrigin(origins = "*")

public class GraduacaoController {
    
        @Autowired
    private GService gService;

    @GetMapping
    public List<Graduacao> listarTodos() {
        return gService.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Graduacao> buscarPorId(@PathVariable int id) {
        Optional<Graduacao> graduacao = gService.buscarPorId(id);
        return graduacao.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Graduacao criar(@RequestBody Graduacao graduacao) {
        return gService.salvar(graduacao);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Graduacao> atualizar(@PathVariable int id, @RequestBody Graduacao graduacao) {
        Graduacao atualizado = gService.atualizar(id, graduacao);
        return atualizado != null ? ResponseEntity.ok(atualizado) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable int id) {
        gService.deletar(id);
        return ResponseEntity.noContent().build();
    }

}
