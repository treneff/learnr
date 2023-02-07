package com.learnr.Learnr.controllers;


import com.learnr.Learnr.models.Day;
import com.learnr.Learnr.repositories.DayRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class DayController {

    @Autowired
    DayRepository dayRepository;

    @GetMapping(value = "/days")
    public ResponseEntity<List<Day>> getAllDays(){
        return new ResponseEntity<>(dayRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/days/{id}")
    public ResponseEntity getDayById(@PathVariable Long id){
        return new ResponseEntity<>(dayRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/days")
    public ResponseEntity<Day> postDay(@RequestBody Day day){
        dayRepository.save(day);
        return new ResponseEntity<>(day, HttpStatus.CREATED);
    }

}
