package com.learnr.Learnr.repositories;

import com.learnr.Learnr.models.Homework;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface HomeworkRepository extends JpaRepository<Homework,Long> {
}
