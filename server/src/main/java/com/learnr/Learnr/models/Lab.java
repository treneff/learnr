package com.learnr.Learnr.models;

import javax.persistence.Entity;

@Entity
public class Lab extends Content{
    public Lab(String title, String detail, Day day, String contentType) {
        super(title, detail, day, contentType);
    }

    public Lab() {
    }

    @Override
    public void completeTask() {

    }
}
