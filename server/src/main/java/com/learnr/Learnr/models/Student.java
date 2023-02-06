package com.learnr.Learnr.models;

import javax.persistence.Entity;

@Entity
//@Table(name = "students")
public class Student extends CourseUser {

    public Student(String firstName, String lastName, String email, Long phone, String dob, String bio, Course course) {
        super(firstName, lastName, email, phone, dob, bio, course);
    }

    public Student() {
    }
}
