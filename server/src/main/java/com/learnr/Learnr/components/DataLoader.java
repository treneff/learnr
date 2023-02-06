package com.learnr.Learnr.components;

import com.learnr.Learnr.models.ContentBlock;
import com.learnr.Learnr.models.Course;
import com.learnr.Learnr.models.Lab;
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
        courseRepository.save(softwareDev);
        Student poppy = new Student("Poppy","Dalglish", "dp@gmail.com", 07774564534L, "12/12/1993", "I am a student",  softwareDev);
        studentRepository.save(poppy);























        ContentBlock jsFunctions = new ContentBlock("JavaScript Functions", 4,4,softwareDev);
        contentBlockRepository.save(jsFunctions);
        ContentBlock jsLoops = new ContentBlock("JavaScript Loops", 4,3,softwareDev);
        contentBlockRepository.save(jsLoops);
        ContentBlock pythonFunctions = new ContentBlock("Python Functions", 1,3,softwareDev);
        contentBlockRepository.save(pythonFunctions);
        ContentBlock pythonLoops = new ContentBlock("Python Loops", 1,4,softwareDev);
        contentBlockRepository.save(pythonLoops);
        ContentBlock javaClasses = new ContentBlock("Java Classes", 4,4,softwareDev);
        contentBlockRepository.save(javaClasses);
        Lab jsLab = new Lab("JavaScript Functions Lab","Extensive Js Lab" );
        labRepository.save(jsLab);
        Lab pythonLab = new Lab("Python Lab","Extensive Python Lab" );
        labRepository.save(pythonLab);
        Lab javaLab = new Lab("Java Lab","Extensive Java Lab" );
        labRepository.save(javaLab);
    }

}
