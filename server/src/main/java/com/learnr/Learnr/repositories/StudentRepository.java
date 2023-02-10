package com.learnr.Learnr.repositories;

import com.learnr.Learnr.models.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentRepository extends JpaRepository<Student,Long> {
    List findStudentByEmail (String email);

}
