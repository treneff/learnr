package com.learnr.Learnr.controllers;


import com.learnr.Learnr.models.Day;
import com.learnr.Learnr.repositories.DayRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static java.lang.Integer.parseInt;

@RestController
public class DayController {

    @Autowired
    DayRepository dayRepository;
    @GetMapping(value = "/api/days")
    public ResponseEntity<List<Day>> findDaysByWeek(
            @RequestParam(name = "week", required = false) String week, @RequestParam(name="day", required = false) String day) {
        if (week != null & day == null){
            return new ResponseEntity<>(dayRepository.findDaysByWeekNumber(parseInt(week)), HttpStatus.OK);
        }
        else if (week != null & day != null){
            return new ResponseEntity<>(dayRepository.findDayByWeekNumberAndDayNumber(parseInt(week), parseInt(day)), HttpStatus.OK);
        }
        return new ResponseEntity<>(dayRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/api/days/{id}")
    public ResponseEntity getDayById(@PathVariable Long id){
        return new ResponseEntity<>(dayRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/api/days")
    public ResponseEntity<Day> postDay(@RequestBody Day day){
        dayRepository.save(day);
        return new ResponseEntity<>(day, HttpStatus.CREATED);
    }

}
