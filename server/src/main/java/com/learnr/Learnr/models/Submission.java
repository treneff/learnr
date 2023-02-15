package com.learnr.Learnr.models;
import javax.persistence.*;

@Entity
@Table(name = "submissions")
public class Submission {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "student_id")
    private Long studentId;

    @Column(name = "content_id")
    private Long contentId;

    @Column(name = "url")
    private String url;

    @Column(name = "difficulty_level")
    private int difficultyLevel;

    @Column(name = "comment")
    private String comment;


    public Submission(Long contentId, Long studentId, String url, int difficultyLevel, String comment) {
        this.studentId = studentId;
        this.contentId = contentId;
        this.url = url;
        this.difficultyLevel = difficultyLevel;
        this.comment = comment;
    }

    public Submission() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getStudentId() {
        return studentId;
    }

    public void setStudentId(Long studentId) {
        this.studentId = studentId;
    }

    public Long getContentId() {
        return contentId;
    }

    public void setContentId(Long contentId) {
        this.contentId = contentId;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public int getDifficultyLevel() {
        return difficultyLevel;
    }

    public void setDifficultyLevel(int difficultyLevel) {
        this.difficultyLevel = difficultyLevel;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

}





