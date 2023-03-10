package com.learnr.Learnr.models;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.List;

@Entity
public class Student extends CourseUser {


    @JsonBackReference(value = "student_completions_reference")
    @OneToMany(mappedBy = "contentId", fetch = FetchType.LAZY)
    private List<Completion> completions;

    @JsonBackReference(value = "student_submissions_reference")
    @OneToMany(mappedBy = "contentId", fetch = FetchType.LAZY)
    private List<Submission> submissions;

    public Student(String firstName, String lastName, String email, Long phone, String dob, String bio) {
        super(firstName, lastName, email, phone, dob, bio);
    }

    public Student() {
    }

    public List<Completion> getCompletions() {
        return completions;
    }

    public void setCompletions(List<Completion> completions) {
        this.completions = completions;
    }

    public List<Submission> getSubmissions() {
        return submissions;
    }

    public void setSubmissions(List<Submission> submissions) {
        this.submissions = submissions;
    }
}
