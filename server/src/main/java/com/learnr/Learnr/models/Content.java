package com.learnr.Learnr.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.learnr.Learnr.interfaces.Completable;

import javax.persistence.*;
import java.util.List;

@Entity
@Inheritance
@Table(name = "contents")
public abstract class Content implements Completable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "title")
    private String title;

    @Column(name = "contentType")
    private  String contentType;

    @Column(name = "detail")
    private String detail;

    @ManyToOne
    @JoinColumn(name = "day_id", nullable = false)
    @JsonBackReference(value = "content_days_reference")
    private Day day;

    @JsonBackReference(value = "content_completions_reference")
    @OneToMany(mappedBy = "content", fetch = FetchType.LAZY)
    private List<Completion> completions;

    @JsonBackReference(value = "content_submissions_reference")
    @OneToMany(mappedBy = "content", fetch = FetchType.LAZY)
    private List<Submission> submissions;

    public Content(String title, String detail, Day day, String contentType) {
        this.title = title;
        this.detail = detail;
        this.day = day;
        this.contentType = contentType;
    }

    public Content() {
    }

    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDetail() {
        return this.detail;
    }

    public void setDetail(String detail) {
        this.detail = detail;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Day getDay() {
        return day;
    }

    public void setDay(Day day) {
        this.day = day;
    }

    public List<Completion> getCompletions() {
        return this.completions;
    }

    public void setCompletions(List<Completion> completions) {
        this.completions = completions;
    }

    public List<Submission> getSubmissions() {
        return this.submissions;
    }

    public void setSubmissions(List<Submission> submissions) {
        this.submissions = submissions;
    }


}
