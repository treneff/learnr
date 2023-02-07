package com.learnr.Learnr.models;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
public class CourseNotes extends Content {

    public CourseNotes(String title, String detail, Day day) {
        super(title, detail, day);
    }

    public CourseNotes() {
    }

    @Override
    public void completeTask() {

    }
}
