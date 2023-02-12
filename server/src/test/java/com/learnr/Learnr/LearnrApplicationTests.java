package com.learnr.Learnr;

import com.learnr.Learnr.models.Day;
import com.learnr.Learnr.repositories.DayRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
@ActiveProfiles("test")
class LearnrApplicationTests {

	@Autowired
	DayRepository dayRepository;

	@Test
	void contextLoads() {
	}

	@Test
	public void canFindDayByWeekAndDayNumber(){
		List<Day> found = dayRepository.findDayByWeekNumberAndDayNumber(1, 1);
		assertEquals(1, found.size());

	}

}
