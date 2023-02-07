package com.learnr.Learnr.models;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
public class Homework extends Content {
    public Homework(String title, String detail, Day day) {
        super(title, detail, day);
    }

    public Homework() {
    }

    @Override
    public void completeTask() {

    }
}
