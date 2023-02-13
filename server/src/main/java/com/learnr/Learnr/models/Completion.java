package com.learnr.Learnr.models;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "completions")
public class Completion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

//    @ManyToOne
    @Column(name = "student_id")
//    @JsonManagedReference(value = "student_completions_reference")
//    @JsonBackReference
    private Long studentId;

//    @ManyToOne
    @Column(name = "content_id")
//    @JsonManagedReference(value = "content_completions_reference")
    private Long contentId;

    public Completion(Long contentId, Long studentId) {
        this.studentId = studentId;
        this.contentId = contentId;
    }

    public Completion() {
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getStudentId() {
        return this.studentId;
    }

    public void setStudentId(Long studentId) {
        this.studentId = studentId;
    }

    public Long getContentId() {
        return this.contentId;
    }

    public void setContentId(Long contentId) {
        this.contentId = contentId;
    }
}
