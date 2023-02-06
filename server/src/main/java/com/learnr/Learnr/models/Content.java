package com.learnr.Learnr.models;

import com.learnr.Learnr.interfaces.Completable;

import javax.persistence.*;

@Entity
@Table(name = "content")
public abstract class Content implements Completable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "title")
    private String title;

    @Column(name = "detail")
    private String detail;

    @Column(name = "completed")
    private boolean completed;

    public Content(String title, String detail) {
        this.title = title;
        this.detail = detail;
        this.completed = false;
    }

    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDetail() {
        return this.detail;
    }

    public void setDetail(String detail) {
        this.detail = detail;
    }

    public boolean isCompleted() {
        return this.completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }

    public void completeTask(){
        setCompleted(true);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
