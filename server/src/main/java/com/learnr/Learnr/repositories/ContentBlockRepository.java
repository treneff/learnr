package com.learnr.Learnr.repositories;

import com.learnr.Learnr.models.ContentBlock;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContentBlockRepository extends JpaRepository<ContentBlock, Long> {
}
