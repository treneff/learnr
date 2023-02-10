package com.learnr.Learnr.controllers;

import com.learnr.Learnr.models.Day;
import com.learnr.Learnr.models.Student;
import com.learnr.Learnr.repositories.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static java.lang.Integer.parseInt;

@RestController
public class StudentController {

    @Autowired
    StudentRepository studentRepository;

    @GetMapping(value = "/api/students")
    public ResponseEntity<List<Student>> getAllStudents(
            @RequestParam(name = "email", required = false) String email) {
        if (email != null) {
            return new ResponseEntity<>(studentRepository.findStudentByEmail(email), HttpStatus.OK);
        }
        return new ResponseEntity<>(studentRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/api/students/{id}")
    public ResponseEntity getStudentById(@PathVariable Long id) {
        return new ResponseEntity<>(studentRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/api/students", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Student> postStudent(@RequestBody Student student) {
        studentRepository.save(student);
        return new ResponseEntity<>(student, HttpStatus.CREATED);
    }
}

