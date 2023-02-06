package com.learnr.Learnr.controllers;

import com.learnr.Learnr.models.Student;
import com.learnr.Learnr.repositories.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class StudentController {

        @Autowired
        StudentRepository studentRepository;

        @GetMapping(value = "/students")
        public ResponseEntity<List<Student>> getAllPersons(){
            return new ResponseEntity<>(studentRepository.findAll(), HttpStatus.OK);
        }

        @GetMapping(value = "/students/{id}")
        public ResponseEntity getStudent(@PathVariable Long id){
            return new ResponseEntity<>(studentRepository.findById(id), HttpStatus.OK);
        }

        @PostMapping(value = "/students")
        public ResponseEntity<Student> postPerson(@RequestBody Student student){
            studentRepository.save(student);
            return new ResponseEntity<>(student, HttpStatus.CREATED);
        }
}

