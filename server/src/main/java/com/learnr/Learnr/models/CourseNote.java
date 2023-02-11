package com.learnr.Learnr.models;

import javax.persistence.Entity;

@Entity
public class CourseNote extends Content {

    public CourseNote(String title, String detail, Day day, String contentType) {
        super(title, detail, day, contentType);
    }

    public CourseNote() {
    }

    @Override
    public void completeTask() {

    }
}
