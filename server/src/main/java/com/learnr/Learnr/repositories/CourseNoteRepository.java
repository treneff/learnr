package com.learnr.Learnr.repositories;

import com.learnr.Learnr.models.CourseNote;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseNoteRepository extends JpaRepository<CourseNote, Long> {
}
