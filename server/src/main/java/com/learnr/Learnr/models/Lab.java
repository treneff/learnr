package com.learnr.Learnr.models;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
//@Table(name = "labs")
public class Lab extends Content{
    public Lab(String title, String detail, Day day) {
        super(title, detail, day);
    }

    public Lab() {
    }

    @Override
    public void completeTask() {

    }
}
