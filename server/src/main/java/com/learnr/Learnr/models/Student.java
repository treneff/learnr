package com.learnr.Learnr.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.List;

@Entity
//@Table(name = "students")
public class Student extends CourseUser {


    @JsonBackReference
    @OneToMany(mappedBy = "content", fetch = FetchType.LAZY)
    private List<Completion> completions;

    public Student(String firstName, String lastName, String email, Long phone, String dob, String bio, Course course) {
        super(firstName, lastName, email, phone, dob, bio, course);
    }



    public Student() {
    }
}
