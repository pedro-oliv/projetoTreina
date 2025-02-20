package com.example.springapi.controller;

import com.example.springapi.model.Identificacao;
import com.example.springapi.service.IdentificacaoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/identificacao")
@CrossOrigin(origins = "*")

public class IdentificacaoController {

    @Autowired
    private IdentificacaoService identificacaoService;

    @GetMapping
    public List<Identificacao> listarTodos() {
        return identificacaoService.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Identificacao> buscarPorId(@PathVariable int id) {
        Optional<Identificacao> identificacao = identificacaoService.buscarPorId(id);
        return identificacao.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Identificacao> criarOuAtualizar(@RequestBody Identificacao identificacao) {
        Identificacao salvo = identificacaoService.salvarOuAtualizar(identificacao);
        return ResponseEntity.ok(salvo);
    }


    @PutMapping("/{id}")
    public ResponseEntity<Identificacao> atualizar(@PathVariable int id, @RequestBody Identificacao identificacao) {
        if (!identificacaoService.buscarPorId(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        Identificacao atualizado = identificacaoService.atualizar(id, identificacao);
        return ResponseEntity.ok(atualizado);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable int id) {
        identificacaoService.deletar(id);
        return ResponseEntity.noContent().build();
    }
}
