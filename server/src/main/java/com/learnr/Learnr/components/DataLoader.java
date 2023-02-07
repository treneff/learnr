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
        Course softwareDev = new Course("Professional Software Development");
        courseRepository.save(softwareDev);

        //DAYS
        //MODULE 1 (Weeks 1-4, 20 Days.  Week 1 Populated with actual titles)
        Day W1D1 = new Day("Induction, Unix & Git", 1, 1, softwareDev);
        dayRepository.save(W1D1);
        Day W1D2 = new Day("Intro to Programming, Conditionals, Data Structures & Loops", 1, 2, softwareDev);
        dayRepository.save(W1D2);
        Day W1D3 = new Day("Functions, Tests & Pair Programming", 1, 3, softwareDev);
        dayRepository.save(W1D3);
        Day W1D4 = new Day("Friends Lab & Modules/Packages", 1, 4, softwareDev);
        dayRepository.save(W1D4);
        Day W1D5 = new Day("Weekend Homework & Recap", 1, 5, softwareDev);
        dayRepository.save(W1D5);

        Day W2D1 = new Day("Seize End-to-End Applications", 2, 1, softwareDev);
        dayRepository.save(W2D1);
        Day W2D2 = new Day("Integrate Granular E-commerce", 2, 2, softwareDev);
        dayRepository.save(W2D2);
        Day W2D3 = new Day("Leverage Web-Enabled Portals", 2, 3, softwareDev);
        dayRepository.save(W2D3);
        Day W2D4 = new Day("Integrate Back-end Networks", 2, 4, softwareDev);
        dayRepository.save(W2D4);
        Day W2D5 = new Day("Weekend Homework & Recap", 2, 5, softwareDev);
        dayRepository.save(W2D5);

        Day W3D1 = new Day("Enable Strategic Solutions", 3, 1, softwareDev);
        dayRepository.save(W3D1);
        Day W3D2 = new Day("Embrace 24/7 E-Markets", 3, 2, softwareDev);
        dayRepository.save(W3D2);
        Day W3D3 = new Day("Architect Front-end Channels", 3, 3, softwareDev);
        dayRepository.save(W3D3);
        Day W3D4 = new Day("Target Proactive Action-Items", 3, 4, softwareDev);
        dayRepository.save(W3D4);
        Day W3D5 = new Day("Weekend Homework & Recap", 3, 5, softwareDev);
        dayRepository.save(W3D5);

        //Course Notes
        CourseNote command_line_basics = new CourseNote("Command Line Basics", "This will be the content of Command Line Basics", W1D1);
        courseNoteRepository.save(command_line_basics);
        CourseNote effective_text_editing = new CourseNote("Effective Text Editing", "This will be the content of Command Line Basics", W1D1);
        courseNoteRepository.save(effective_text_editing);
        CourseNote git_and_github = new CourseNote("Git and Github", "This will be the content of Git and Github", W1D1);
        courseNoteRepository.save(git_and_github);
        CourseNote what_is_programming = new CourseNote("What is programming", "This will be the content of what is programming", W1D1);
        courseNoteRepository.save(what_is_programming);

        //Homework
        Homework submit_to_github = new Homework("Submit Something to Github", "This will be the content of the Github Homework", W1D1);
        homeworkRepository.save(submit_to_github);
        Homework lists_and_dictionaries = new Homework("Lists and Dictionaries Homework", "This will be the content of the Github Homework", W1D1);
        homeworkRepository.save(lists_and_dictionaries);

        //Lab
        Lab jsLab = new Lab("JavaScript Functions Lab", "Extensive Js Lab", W1D1);
        labRepository.save(jsLab);
        Lab pythonLab = new Lab("Python Lab", "Extensive Python Lab", W1D1);
        labRepository.save(pythonLab);
        Lab javaLab = new Lab("Java Lab", "Extensive Java Lab", W1D1);
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