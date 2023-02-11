package com.learnr.Learnr.models;

import javax.persistence.Entity;

@Entity
public class Homework extends Content {
    public Homework(String title, String detail, Day day, String contentType) {
        super(title, detail, day, contentType);
    }

    public Homework() {
    }

    @Override
    public void completeTask() {

    }
}
