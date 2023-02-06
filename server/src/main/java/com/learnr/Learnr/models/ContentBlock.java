package com.learnr.Learnr.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.List;

@Entity
    @Table(name = "day")
    public class ContentBlock {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        @Column(name = "title")
        private String title;

        @Column(name = "week")
        private int week;

        @Column(name = "day")
        private int day;

        @ManyToOne
        @JoinColumn(name = "course", nullable = false)
        @JsonManagedReference
        private Course course;


        @OneToMany
@JsonManagedReference
        private List<Content> content;

        public ContentBlock(String title, int week, int day, Course course) {
            this.title = title;
            this.week = week;
            this.day = day;
            this.course = course;
        }

        public ContentBlock() {
        }

        public Long getId() {
            return this.id;
        }

        public void setId(Long id) {
            this.id = id;
        }

        public String getTitle() {
            return this.title;
        }

        public void setTitle(String title) {
            this.title = title;
        }

        public int getWeek() {
            return this.week;
        }

        public void setWeek(int week) {
            this.week = week;
        }

        public int getDay() {
            return this.day;
        }

        public void setDay(int day) {
            this.day = day;
        }

        public Course getCourse() {
            return this.course;
        }

        public void setCourse(Course course) {
            this.course = course;
        }
    }
