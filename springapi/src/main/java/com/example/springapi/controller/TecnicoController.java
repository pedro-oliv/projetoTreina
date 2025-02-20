package com.example.springapi.controller;

import com.example.springapi.service.TService;
import com.example.springapi.model.Tecnico;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/formacao/tecnico")
@CrossOrigin(origins = "*")

public class TecnicoController {
        @Autowired
    private TService tService;

    @GetMapping
    public List<Tecnico> listarTodos() {
        return tService.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Tecnico> buscarPorId(@PathVariable int id) {
        Optional<Tecnico> tecnico = tService.buscarPorId(id);
        return tecnico.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Tecnico criar(@RequestBody Tecnico tecnico) {
        return tService.salvar(tecnico);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Tecnico> atualizar(@PathVariable int id, @RequestBody Tecnico tecnico) {
        Tecnico atualizado = tService.atualizar(id, tecnico);
        return atualizado != null ? ResponseEntity.ok(atualizado) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable int id) {
        tService.deletar(id);
        return ResponseEntity.noContent().build();
    }
}
