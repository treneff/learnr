package com.learnr.Learnr.models;

public class Student extends User{

    public Student(String firstName, int lastName, String email, int phone, String dob, String bio, Course course) {
        super(firstName, lastName, email, phone, dob, bio, course);
    }
}
