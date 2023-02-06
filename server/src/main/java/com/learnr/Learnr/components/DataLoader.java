package com.learnr.Learnr.components;

import com.learnr.Learnr.models.Course;
import com.learnr.Learnr.models.Student;
import com.learnr.Learnr.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    ContentBlockRepository contentBlockRepository;
    @Autowired
    CourseNotesRepository courseNotesRepository;
    @Autowired
    CourseRepository courseRepository;
    @Autowired
    HomeworkRepository homeworkRepository;
    @Autowired
    LabRepository labRepository;
    @Autowired
    StudentRepository studentRepository;
    @Autowired
    TeacherRepository teacherRepository;


    public DataLoader() {

    }

    public void run(ApplicationArguments args) {
        Course softwareDev = new Course("Professional software development");
        Student poppy = new Student("Poppy","Dalglish", "dp@gmail.com", 07774564534L, "12/12/1993", "I am a student",  softwareDev);

    }

}
