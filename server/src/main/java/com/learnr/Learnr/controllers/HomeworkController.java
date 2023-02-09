package com.learnr.Learnr.controllers;

import com.learnr.Learnr.models.Homework;
import com.learnr.Learnr.repositories.HomeworkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class HomeworkController {

    @Autowired
    HomeworkRepository homeworkRepository;

    @GetMapping(value = "/api/homeworks")
    public ResponseEntity<List<Homework>> getAllHomeworks(){
        return new ResponseEntity<>(homeworkRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "api/homeworks/{id}")
    public ResponseEntity getHomeworkById(@PathVariable Long id){
        return new ResponseEntity<>(homeworkRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/api/homeworks")
    public ResponseEntity<Homework> postHomework(@RequestBody Homework homework){
        homeworkRepository.save(homework);
        return new ResponseEntity<>(homework, HttpStatus.CREATED);
    }
}
