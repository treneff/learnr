package com.learnr.Learnr.models;

import javax.persistence.Column;

public class Teacher extends User{
    @Column(name = "job_title")
    private String jobTitle;

    public Teacher(String firstName, int lastName, String email, int phone, String dob, String bio, Course course, String jobTitle) {
        super(firstName, lastName, email, phone, dob, bio, course);
        this.jobTitle = jobTitle;
    }

    public String getJobTitle() {
        return this.jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }
}
