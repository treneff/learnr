package com.learnr.Learnr.components;

import com.learnr.Learnr.models.*;
import com.learnr.Learnr.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    DayRepository dayRepository;
    @Autowired
    CourseNoteRepository courseNoteRepository;
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

    @Autowired
    CompletionRepository completionRepository;

    @Autowired
    SubmissionRepository submissionRepository;


    public DataLoader() {

    }

    public void run(ApplicationArguments args) {
        //Create Course
        Course softwareDev = new Course("Professional software development");
        courseRepository.save(softwareDev);

        //Days
        Day jsFunctions = new Day("JavaScript Functions", 4, 4, softwareDev);
        dayRepository.save(jsFunctions);
        Day jsLoops = new Day("JavaScript Loops", 4, 3, softwareDev);
        dayRepository.save(jsLoops);
        Day pythonFunctions = new Day("Python Functions", 1, 3, softwareDev);
        dayRepository.save(pythonFunctions);
        Day pythonLoops = new Day("Python Loops", 1, 4, softwareDev);
        dayRepository.save(pythonLoops);
        Day javaClasses = new Day("Java Classes", 4, 4, softwareDev);
        dayRepository.save(javaClasses);

        //Course Notes
        CourseNote command_line_basics = new CourseNote("Command Line Basics", "This will be the content of Command Line Basics", jsFunctions);
        courseNoteRepository.save(command_line_basics);
        CourseNote effective_text_editing = new CourseNote("Effective Text Editing", "This will be the content of Command Line Basics", jsFunctions);
        courseNoteRepository.save(effective_text_editing);
        CourseNote git_and_github = new CourseNote("Git and Github", "This will be the content of Git and Github", jsLoops);
        courseNoteRepository.save(git_and_github);
        CourseNote what_is_programming = new CourseNote("What is programming", "This will be the content of what is programming", pythonFunctions);
        courseNoteRepository.save(what_is_programming);

        //Homework
        Homework submit_to_github = new Homework("Submit Something to Github", "This will be the content of the Github Homework", javaClasses);
        homeworkRepository.save(submit_to_github);
        Homework lists_and_dictionaries = new Homework("Lists and Dictionaries Homework", "This will be the content of the Github Homework", javaClasses);
        homeworkRepository.save(lists_and_dictionaries);

        //Lab
        Lab jsLab = new Lab("JavaScript Functions Lab", "Extensive Js Lab", jsFunctions);
        labRepository.save(jsLab);
        Lab pythonLab = new Lab("Python Lab", "Extensive Python Lab", pythonFunctions);
        labRepository.save(pythonLab);
        Lab javaLab = new Lab("Java Lab", "Extensive Java Lab", jsLoops);
        labRepository.save(javaLab);

        //Teachers and Students
        Teacher mar = new Teacher("Mar", "Beveridge", "mar@codeclan.com", 066L, "8/12/1994", "I like teaching code", softwareDev, "Instructor");
        teacherRepository.save(mar);
        Student poppy = new Student("Poppy", "Dalglish", "dp@gmail.com", 07774564534L, "12/12/1993", "I am a student", softwareDev);
        studentRepository.save(poppy);
        Student john = new Student("John", "Johnson", "johnson@john.fun", 07774554534L, "12/12/1923", "I am an old student", softwareDev);
        studentRepository.save(john);
        Teacher bob = new Teacher("Bob", "Bobson", "bobson@codeclan.com", 28594039L, "8/12/2018", "I am smart person", softwareDev, "King Instructor");
        teacherRepository.save(bob);
        Student mikhayla = new Student("Mikhayla", "Dunno", "email@gmail.fun", 74801923L, "12/12/1991", "I am a codeclan student", softwareDev);
        studentRepository.save(mikhayla);
        Teacher dick = new Teacher("Dick", "Dickson", "dick.dickson@gmail.fun", 91348930L, "06/02/2023", "My name is Dick Dickson and I teach coding", softwareDev, "Small Instructor");
        teacherRepository.save(dick);

        // Add Completions and Submissions

        Completion completion1 = new Completion(pythonLab, poppy);
        completionRepository.save(completion1);

        Submission submission1 = new Submission(submit_to_github, poppy, "poppy.github.com", 5, "I dunno how to use github");
        submissionRepository.save(submission1);

    }
}