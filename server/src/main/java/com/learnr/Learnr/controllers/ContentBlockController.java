package com.learnr.Learnr.controllers;

import com.example.codeclan.pirateservice.models.Pirate;
import com.example.codeclan.pirateservice.repository.PirateRepository;
import com.learnr.Learnr.repositories.ContentBlockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ContentBlockController {

    @Autowired
    ContentBlockRepository contentBlockRepository;

}
