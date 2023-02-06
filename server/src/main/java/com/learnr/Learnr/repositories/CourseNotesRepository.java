package com.learnr.Learnr.repositories;

import com.learnr.Learnr.models.CourseNotes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseNotesRepository extends JpaRepository<CourseNotes, Long> {
}
