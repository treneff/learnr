package com.learnr.Learnr.models;

import javax.persistence.Column;
import javax.persistence.Entity;

@Entity
//@Table(name = "teachers")
public class Teacher extends CourseUser {
    @Column(name = "job_title")
    private String jobTitle;

    public Teacher(String firstName, String lastName, String email, Long phone, String dob, String bio, Course course, String jobTitle) {
        super(firstName, lastName, email, phone, dob, bio, course);
        this.jobTitle = jobTitle;
    }

    public Teacher() {
    }

    public String getJobTitle() {
        return this.jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }
}
