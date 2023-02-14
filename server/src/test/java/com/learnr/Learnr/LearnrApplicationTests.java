package com.learnr.Learnr;

import com.learnr.Learnr.models.Completion;
import com.learnr.Learnr.models.Day;
import com.learnr.Learnr.models.Student;
import com.learnr.Learnr.repositories.CompletionRepository;
import com.learnr.Learnr.repositories.DayRepository;
import com.learnr.Learnr.repositories.StudentRepository;
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

	@Autowired
	CompletionRepository completionRepository;

	@Autowired
	StudentRepository studentRepository;

	@Test
	void contextLoads() {
	}

	@Test
	public void canFindDayByWeekAndDayNumber(){
		List<Day> found = dayRepository.findDayByWeekNumberAndDayNumber(1, 1);
		assertEquals(1, found.size());
	}
	@Test
	public void findDaysByWeekNumber(){
		List<Day> found = dayRepository.findDaysByWeekNumber(1);
		assertEquals(5, found.size());
	}
	@Test
	public void canFindCompletionsByStudentId(){
		List<Completion> found = completionRepository.findCompletionsByStudentId(1L);
		assertEquals(1,found.size());
	}
	@Test
	public void findStudentByEmail(){
		List<Student> found = studentRepository.findStudentByEmail("sarahsmith@gmail.fun");
		assertEquals(1,found.size());
		assertEquals("Sarah", found.get(0).getFirstName());
		assertEquals("Smith", found.get(0).getLastName());
	}

}
