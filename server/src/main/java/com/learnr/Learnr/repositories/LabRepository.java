package com.learnr.Learnr.repositories;

import com.learnr.Learnr.models.Lab;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LabRepository extends JpaRepository<Lab,Long> {
}