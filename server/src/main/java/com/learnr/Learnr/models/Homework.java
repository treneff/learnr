package com.learnr.Learnr.models;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "homeworks")
public class Homework extends Content {
    public Homework(String title, String detail) {
        super(title, detail);
    }
}
