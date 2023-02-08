package com.learnr.Learnr.controllers;

import com.learnr.Learnr.models.CourseNote;
import com.learnr.Learnr.repositories.CourseNoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CourseNoteController {

    @Autowired
    CourseNoteRepository courseNoteRepository;

    @GetMapping(value = "/api/course-notes")
    public ResponseEntity<List<CourseNote>> getAllCourseNotes(){
        return new ResponseEntity<>(courseNoteRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/api/course-notes/{id}")
    public ResponseEntity getCourseNotesById(@PathVariable Long id){
        return new ResponseEntity<>(courseNoteRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/api/course-notes")
    public ResponseEntity<CourseNote> postCourseNotes(@RequestBody CourseNote courseNote){
        courseNoteRepository.save(courseNote);
        return new ResponseEntity<>(courseNote, HttpStatus.CREATED);
    }
}
