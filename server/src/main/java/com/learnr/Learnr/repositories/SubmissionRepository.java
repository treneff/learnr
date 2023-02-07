package com.learnr.Learnr.repositories;

import com.learnr.Learnr.models.Submission;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SubmissionRepository extends JpaRepository<Submission, Long> {
}
