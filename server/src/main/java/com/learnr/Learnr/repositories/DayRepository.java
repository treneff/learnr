package com.learnr.Learnr.repositories;

import com.learnr.Learnr.models.Day;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DayRepository extends JpaRepository<Day, Long> {
}
