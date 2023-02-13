package com.learnr.Learnr.repositories;

import com.learnr.Learnr.models.Completion;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CompletionRepository extends JpaRepository<Completion, Long>{

    List<Completion> findCompletionsByStudentId(Long id);

}
