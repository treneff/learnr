package com.learnr.Learnr;

import com.learnr.Learnr.models.Completion;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.ResponseEntity;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class LearnrControllerTests {

    @Autowired
    TestRestTemplate restTemplate;

    @Test
    public void testGetAllCompletions() {
        // GET request retrieves the response body as a list of Completion objects.  List.class implies a json
        List<Completion> completions = restTemplate.getForObject("/api/completions", List.class);
        assertNotNull(completions);
    }

    @Test
    public void testGetCompletionsByStudentId() {
        Long studentId = 1L;
        List<Completion> completions = restTemplate.getForObject("/api/completions?student=" + studentId, List.class);
        assertNotNull(completions);
        assertEquals(1, completions.size());
    }

    @Test
    public void testPostCompletion() {
        Completion completion = new Completion();
        completion.setContentId(11L);
        completion.setStudentId(1L);

        ResponseEntity<Completion> response = restTemplate.postForEntity("/api/completions", completion, Completion.class);
        Completion createdCompletion = response.getBody();
        assertNotNull(createdCompletion);
        assertNotNull(createdCompletion.getId());
    }
}
