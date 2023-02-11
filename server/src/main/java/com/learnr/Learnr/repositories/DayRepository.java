package com.learnr.Learnr.repositories;

import com.learnr.Learnr.models.Day;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DayRepository extends JpaRepository<Day, Long> {

    List<Day> findDaysByWeekNumber(int week);

    List<Day> findDayByWeekNumberAndDayNumber(int week, int day);

}
