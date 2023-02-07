package com.learnr.Learnr.controllers;


import com.learnr.Learnr.repositories.DayRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class ContentBlockController {

    @Autowired
    DayRepository dayRepository;

}
