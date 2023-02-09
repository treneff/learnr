package com.learnr.Learnr.controllers;

import com.learnr.Learnr.models.Completion;
import com.learnr.Learnr.repositories.CompletionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CompletionController {
    @Autowired
    CompletionRepository completionRepository;

    @GetMapping(value = "/api/completions")
    public ResponseEntity<List<Completion>> getAllCompletions(){
        return new ResponseEntity<>(completionRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/api/completions/{id}")
    public ResponseEntity getCompletionById(@PathVariable Long id){
        return new ResponseEntity<>(completionRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/api/completions")
    public ResponseEntity<Completion> postCompletion(@RequestBody Completion completion){
        completionRepository.save(completion);
        return new ResponseEntity<>(completion, HttpStatus.CREATED);
    }
}
