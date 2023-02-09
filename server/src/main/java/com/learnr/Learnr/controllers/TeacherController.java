package com.learnr.Learnr.controllers;

import com.learnr.Learnr.models.Teacher;
import com.learnr.Learnr.repositories.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TeacherController {

    @Autowired
    TeacherRepository teacherRepository;

    @GetMapping(value = "/api/teachers")
    public ResponseEntity<List<Teacher>> getAllTeachers(){
        return new ResponseEntity<>(teacherRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/api/teachers/{id}")
    public ResponseEntity getTeacherById(@PathVariable Long id){
        return new ResponseEntity<>(teacherRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/api/teachers")
    public ResponseEntity<Teacher> postTeacher(@RequestBody Teacher teacher){
        teacherRepository.save(teacher);
        return new ResponseEntity<>(teacher, HttpStatus.CREATED);
    }

}

