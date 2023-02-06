package com.learnr.Learnr.repositories;

import com.learnr.Learnr.models.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface TeacherRepository extends JpaRepository<Teacher, Long> {
}


