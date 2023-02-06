package com.learnr.Learnr.models;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
//@Table(name = "course-notes")
public class CourseNotes extends Content {

    public CourseNotes(String title, String detail) {
        super(title, detail);
    }

    public CourseNotes() {
    }
}
