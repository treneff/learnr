package com.learnr.Learnr.models;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;

@Entity
@Table(name = "submissions")
public class Submission {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "student_id", nullable = false)
    @JsonManagedReference
    private Student student;

    @ManyToOne
    @JoinColumn(name = "content_id", nullable = false)
    @JsonManagedReference
    private Content content;

    @Column(name = "url")
    private String url;

    @Column(name = "difficulty_level")
    private int difficultyLevel;

    @Column(name = "comment")
    private String comment;


    public Submission(Content content, Student student, String url, int difficultyLevel, String comment) {
        this.student = student;
        this.content = content;
        this.url = url;
        this.difficultyLevel = difficultyLevel;
        this.comment = comment;
    }

    public Submission() {
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Student getStudent() {
        return this.student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }

    public Content getContent() {
        return this.content;
    }

    public void setContent(Content content) {
        this.content = content;
    }

    public String getUrl() {
        return this.url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public int getDifficultyLevel() {
        return this.difficultyLevel;
    }

    public void setDifficultyLevel(int difficultyLevel) {
        this.difficultyLevel = difficultyLevel;
    }

    public String getComment() {
        return this.comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}
