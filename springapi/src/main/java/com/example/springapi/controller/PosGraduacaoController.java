package com.example.springapi.controller;

import com.example.springapi.service.PGService;
import com.example.springapi.model.PosGraduacao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/formacao/posgraduacao")
@CrossOrigin(origins = "*")

public class PosGraduacaoController {
    
    @Autowired
    private PGService pgService;

    @GetMapping
    public List<PosGraduacao> listarTodos() {
        return pgService.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<PosGraduacao> buscarPorId(@PathVariable int id) {
        Optional<PosGraduacao> posgraduacao = pgService.buscarPorId(id);
        return posgraduacao.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public PosGraduacao criar(@RequestBody PosGraduacao posgraduacao) {
        return pgService.salvar(posgraduacao);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PosGraduacao> atualizar(@PathVariable int id, @RequestBody PosGraduacao posgraduacao) {
        PosGraduacao atualizado = pgService.atualizar(id, posgraduacao);
        return atualizado != null ? ResponseEntity.ok(atualizado) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable int id) {
        pgService.deletar(id);
        return ResponseEntity.noContent().build();
    }
}
