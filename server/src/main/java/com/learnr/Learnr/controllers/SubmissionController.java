package com.learnr.Learnr.controllers;

import com.learnr.Learnr.models.Submission;
import com.learnr.Learnr.repositories.SubmissionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SubmissionController {

    @Autowired
    SubmissionRepository submissionRepository;

    @GetMapping(value = "/api/submissions")
    public ResponseEntity<List<Submission>> getAllSubmissions(){
        return new ResponseEntity<>(submissionRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/api/submissions/{id}")
    public ResponseEntity getSubmissionById(@PathVariable Long id){
        return new ResponseEntity<>(submissionRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/api/submissions")
    public ResponseEntity<Submission> postSubmission(@RequestBody Submission submission){
        submissionRepository.save(submission);
        return new ResponseEntity<>(submission, HttpStatus.CREATED);
    }
}
