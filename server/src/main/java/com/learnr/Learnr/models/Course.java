package com.learnr.Learnr.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "courses")
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title")
    private String title;


//Working as intended
//    @JsonManagedReference(value = "course_days_reference")
    @OneToMany(mappedBy = "course", fetch = FetchType.LAZY)
    private List<Day> days;

    @ManyToMany
    @JsonIgnoreProperties({"courses"})
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "enrolments",
            joinColumns = {@JoinColumn(name="course_id", nullable = false, updatable = false)},
            inverseJoinColumns = {@JoinColumn(name="user_id", nullable = false, updatable = false)}
    )
    private List<CourseUser> courseUsers;

    public Course(String title) {
        this.title = title;
        this.days = new ArrayList<>();
//        this.courseUsers = new ArrayList<>();
    }

    public Course() {
    }

    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<Day> getDays() {
        return this.days;
    }

    public void setDays(List<Day> days) {
        this.days = this.days;
    }

//    public List<CourseUser> getCourseUsers() {
//        return this.courseUsers;
//    }
//
//    public void setCourseUsers(List<CourseUser> courseUsers) {
//        this.courseUsers = courseUsers;
//    }
}
