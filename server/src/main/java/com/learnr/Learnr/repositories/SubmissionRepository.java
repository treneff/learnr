package com.learnr.Learnr.repositories;

import com.learnr.Learnr.models.Submission;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SubmissionRepository extends JpaRepository<Submission, Long> {

    List<Submission> findSubmissionsByStudentId(Long id);

}
