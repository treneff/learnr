package com.learnr.Learnr.controllers;

import com.learnr.Learnr.models.Lab;
import com.learnr.Learnr.repositories.LabRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class LabController {

    @Autowired
    LabRepository labRepository;

    @GetMapping(value = "/api/labs")
    public ResponseEntity<List<Lab>> getAllLabs(){
        return new ResponseEntity<>(labRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/api/labs/{id}")
    public ResponseEntity getLabById (@PathVariable Long id){
        return new ResponseEntity<>(labRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/api/labs")
    public ResponseEntity<Lab> postLab(@RequestBody Lab lab){
        labRepository.save(lab);
        return new ResponseEntity<>(lab, HttpStatus.CREATED);
    }
}
