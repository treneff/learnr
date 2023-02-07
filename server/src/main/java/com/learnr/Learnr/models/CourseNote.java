package com.learnr.Learnr.models;

import javax.persistence.Entity;

@Entity
public class CourseNote extends Content {

    public CourseNote(String title, String detail, Day day) {
        super(title, detail, day);
    }

    public CourseNote() {
    }

    @Override
    public void completeTask() {

    }
}
