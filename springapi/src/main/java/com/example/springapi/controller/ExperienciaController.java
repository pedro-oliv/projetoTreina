package com.example.springapi.controller;

import com.example.springapi.service.ExperienciaService;
import com.example.springapi.model.Experiencia;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/experiencia")
@CrossOrigin(origins = "*")

public class ExperienciaController {

    @Autowired
    private ExperienciaService experienciaService;

    @GetMapping
    public List<Experiencia> listarTodos() {
        return experienciaService.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Experiencia> buscarPorId(@PathVariable int id) {
        Optional<Experiencia> experiencia = experienciaService.buscarPorId(id);
        return experiencia.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Experiencia criar(@RequestBody Experiencia experiencia) {
        return experienciaService.salvar(experiencia);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Experiencia> atualizar(@PathVariable int id, @RequestBody Experiencia experiencia) {
        Experiencia atualizado = experienciaService.atualizar(id, experiencia);
        return atualizado != null ? ResponseEntity.ok(atualizado) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable int id) {
        experienciaService.deletar(id);
        return ResponseEntity.noContent().build();
    }
}
