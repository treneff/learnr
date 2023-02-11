package com.learnr.Learnr.components;

import com.learnr.Learnr.models.*;
import com.learnr.Learnr.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    DayRepository dayRepository;
    @Autowired
    CourseNoteRepository courseNoteRepository;
    @Autowired
    CourseRepository courseRepository;
    @Autowired
    HomeworkRepository homeworkRepository;
    @Autowired
    LabRepository labRepository;
    @Autowired
    StudentRepository studentRepository;
    @Autowired
    TeacherRepository teacherRepository;

    @Autowired
    CompletionRepository completionRepository;

    @Autowired
    SubmissionRepository submissionRepository;


    public DataLoader() {

    }

    public void run(ApplicationArguments args) {
        //Create Course
        Course softwareDev = new Course("Professional Software Development");
        courseRepository.save(softwareDev);

        //DAYS
        //MODULE 1 (Weeks 1-4, 20 Days + Week 5 (Projects), 1 Day.  Only Week 1 Populated with real titles)
        Day W1D1 = new Day("Induction, Unix & Git", 1, 1, softwareDev);
        dayRepository.save(W1D1);
        Day W1D2 = new Day("Intro to Programming, Conditionals, Data Structures & Loops", 1, 2, softwareDev);
        dayRepository.save(W1D2);
        Day W1D3 = new Day("Functions, Tests & Pair Programming", 1, 3, softwareDev);
        dayRepository.save(W1D3);
        Day W1D4 = new Day("Friends Lab & Modules/Packages", 1, 4, softwareDev);
        dayRepository.save(W1D4);
        Day W1D5 = new Day("Weekend Homework & Recap", 1, 5, softwareDev);
        dayRepository.save(W1D5);

        Day W2D1 = new Day("Seize End-to-End Applications", 2, 1, softwareDev);
        dayRepository.save(W2D1);
        Day W2D2 = new Day("Integrate Granular E-commerce", 2, 2, softwareDev);
        dayRepository.save(W2D2);
        Day W2D3 = new Day("Leverage Web-Enabled Portals", 2, 3, softwareDev);
        dayRepository.save(W2D3);
        Day W2D4 = new Day("Integrate Back-end Networks", 2, 4, softwareDev);
        dayRepository.save(W2D4);
        Day W2D5 = new Day("Weekend Homework & Recap", 2, 5, softwareDev);
        dayRepository.save(W2D5);

        Day W3D1 = new Day("Enable Strategic Solutions", 3, 1, softwareDev);
        dayRepository.save(W3D1);
        Day W3D2 = new Day("Embrace 24/7 E-Markets", 3, 2, softwareDev);
        dayRepository.save(W3D2);
        Day W3D3 = new Day("Architect Front-end Channels", 3, 3, softwareDev);
        dayRepository.save(W3D3);
        Day W3D4 = new Day("Target Proactive Action-Items", 3, 4, softwareDev);
        dayRepository.save(W3D4);
        Day W3D5 = new Day("Weekend Homework & Recap", 3, 5, softwareDev);
        dayRepository.save(W3D5);

        Day W4D1 = new Day("Deliver Dynamic Infrastructures", 4, 1, softwareDev);
        dayRepository.save(W4D1);
        Day W4D2 = new Day("Reinvent Frictionless Solutions", 4, 2, softwareDev);
        dayRepository.save(W4D2);
        Day W4D3 = new Day("Target Innovative Portals", 4, 3, softwareDev);
        dayRepository.save(W4D3);
        Day W4D4 = new Day("Envisioneer Robust Web-Readiness", 4, 4, softwareDev);
        dayRepository.save(W4D4);
        Day W4D5 = new Day("Weekend Homework & Recap", 4, 5, softwareDev);
        dayRepository.save(W4D5);

        Day W5D1 = new Day("Python Project", 5, 1, softwareDev);
        dayRepository.save(W5D1);

        //MODULE 2 (Weeks 6-9, 20 Days + Week 10 (Projects) + Week 11 (Careers), 1 Day.  Only Week 1 Populated with real titles.)

        Day W6D1 = new Day("Conditionals, Data Structures and Loops", 6, 1, softwareDev);
        dayRepository.save(W6D1);
        Day W6D2 = new Day("Constructors and Prototypes, NPM and Testing", 6, 2, softwareDev);
        dayRepository.save(W6D2);
        Day W6D3 = new Day("Callbacks and Enumeration", 6, 3, softwareDev);
        dayRepository.save(W6D3);
        Day W6D4 = new Day("DOM, Debugging and Event Handling", 6, 4, softwareDev);
        dayRepository.save(W6D4);
        Day W6D5 = new Day("Weekend Homework & Recap", 6, 5, softwareDev);
        dayRepository.save(W6D5);

        Day W7D1 = new Day("Embrace Leading-Edge Action-Items", 7, 1, softwareDev);
        dayRepository.save(W7D1);
        Day W7D2 = new Day("Evolve Revolutionary Applications", 7, 2, softwareDev);
        dayRepository.save(W7D2);
        Day W7D3 = new Day("Maximize Mission-Critical Niches", 7, 3, softwareDev);
        dayRepository.save(W7D3);
        Day W7D4 = new Day("Engage End-to-End Technologies", 7, 4, softwareDev);
        dayRepository.save(W7D4);
        Day W7D5 = new Day("Weekend Homework & Recap", 7, 5, softwareDev);
        dayRepository.save(W7D5);

        Day W8D1 = new Day("Transform Scalable E-Services", 8, 1, softwareDev);
        dayRepository.save(W8D1);
        Day W8D2 = new Day("Optimize Dot-Com Architectures", 8, 2, softwareDev);
        dayRepository.save(W8D2);
        Day W8D3 = new Day("Strategize Front-End Action-Items", 8, 3, softwareDev);
        dayRepository.save(W8D3);
        Day W8D4 = new Day("Monetize Back-End Hashtags", 8, 4, softwareDev);
        dayRepository.save(W8D4);
        Day W8D5 = new Day("Weekend Homework & Recap", 8, 5, softwareDev);
        dayRepository.save(W8D5);

        Day W9D1 = new Day("Integrate Granular Interfaces", 9, 1, softwareDev);
        dayRepository.save(W9D1);
        Day W9D2 = new Day("Intermediate Intuitive Schemas", 9, 2, softwareDev);
        dayRepository.save(W9D2);
        Day W9D3 = new Day("Envisioneer virtual solutions", 9, 3, softwareDev);
        dayRepository.save(W9D3);
        Day W9D4 = new Day("Facilitate Seamless Communities", 9, 4, softwareDev);
        dayRepository.save(W9D4);
        Day W9D5 = new Day("Weekend Homework & Recap", 9, 5, softwareDev);
        dayRepository.save(W9D5);

        Day W10D1 = new Day("Javascript Group Project", 10, 1, softwareDev);
        dayRepository.save(W10D1);

        //MODULE 3 (Weeks 12- 14, 15 Days + Week 15 + 16 (Projects).  Only Week 1 Populated with real titles.)

        Day W12D1 = new Day("Intro to Java", 12, 1, softwareDev);
        dayRepository.save(W12D1);
        Day W12D2 = new Day("Data Structures", 12, 2, softwareDev);
        dayRepository.save(W12D2);
        Day W12D3 = new Day("Inheritance", 12, 3, softwareDev);
        dayRepository.save(W12D3);
        Day W12D4 = new Day("(Mostly!) All Day Lab", 12, 4, softwareDev);
        dayRepository.save(W12D4);
        Day W12D5 = new Day("Weekend Homework & Recap", 12, 5, softwareDev);
        dayRepository.save(W12D5);

        Day W13D1 = new Day("Grow Web-Enabled e-Tailers", 13, 1, softwareDev);
        dayRepository.save(W13D1);
        Day W13D2 = new Day("Benchmark 24/365 Initiatives", 13, 2, softwareDev);
        dayRepository.save(W13D2);
        Day W13D3 = new Day("syndicate vertical e-services", 13, 3, softwareDev);
        dayRepository.save(W13D3);
        Day W13D4 = new Day("disintermediate robust web-readiness", 13, 4, softwareDev);
        dayRepository.save(W13D4);
        Day W13D5 = new Day("Weekend Homework & Recap", 13, 5, softwareDev);
        dayRepository.save(W13D5);

        Day W14D1 = new Day("Target Back-End Web-Readiness", 14, 1, softwareDev);
        dayRepository.save(W14D1);
        Day W14D2 = new Day("Leverage Scalable Convergence", 14, 2, softwareDev);
        dayRepository.save(W14D2);
        Day W14D3 = new Day("Deploy Wearable Deliverables", 14, 3, softwareDev);
        dayRepository.save(W14D3);
        Day W14D4 = new Day("Optimize Front-End Users", 14, 4, softwareDev);
        dayRepository.save(W14D4);
        Day W14D5 = new Day("Weekend Homework & Recap", 14, 5, softwareDev);
        dayRepository.save(W14D5);

        Day W15D1 = new Day("Capstone Projects Week 1", 15, 1, softwareDev);
        dayRepository.save(W15D1);

        Day W16D1 = new Day("Capstone Projects Week 2", 16, 1, softwareDev);
        dayRepository.save(W16D1);

        //CONTENT - ONLY WEEKS 1, 6, 12 Contain Real Titles

        //Content Day W1D1
        CourseNote command_line_basics = new CourseNote("Command Line Basics", "This will be the content of Command Line Basics", W1D1, "courseNote");
        courseNoteRepository.save(command_line_basics);
        CourseNote effective_text_editing = new CourseNote("Effective Text Editing", "This will be the content of Command Line Basics", W1D1, "courseNote");
        courseNoteRepository.save(effective_text_editing);
        CourseNote git_and_github = new CourseNote("Git and Github", "This will be the content of Git and Github", W1D1, "courseNote");
        courseNoteRepository.save(git_and_github);
        Homework submit_to_github = new Homework("Submit Something to Github", "This will be the content of the Github Homework", W1D1, "homework");
        homeworkRepository.save(submit_to_github);

        //Content Day W1D2
        CourseNote what_is_programming = new CourseNote("What is programming", "This will be the content of what is programming", W1D2, "courseNote");
        courseNoteRepository.save(what_is_programming);
        CourseNote control_flow = new CourseNote("Control Flow / Conditionals", "This will be the content of Command Line Basics", W1D2, "courseNote");
        courseNoteRepository.save(control_flow);
        CourseNote lists = new CourseNote("Lists", "This will be the content of Command Line Basics", W1D2, "courseNote");
        courseNoteRepository.save(lists);
        CourseNote dictionaries = new CourseNote("Dictionaries", "This will be the content of Git and Github", W1D2, "courseNote");
        courseNoteRepository.save(dictionaries);
        CourseNote loops = new CourseNote("Loops", "This will be the content of Command Line Basics", W1D2, "courseNote");
        courseNoteRepository.save(loops);
        Lab list_and_dictionaries_lab = new Lab("Lists & Dictionaries", "Extensive Js Lab", W1D2, "lab");
        labRepository.save(list_and_dictionaries_lab);

        //Content Day W1D3
        CourseNote functions = new CourseNote("Functions", "This will be the content of what is programming", W1D3, "courseNote" );
        courseNoteRepository.save(functions);
        CourseNote unit_tests = new CourseNote("Unit Tests", "This will be the content of Command Line Basics", W1D3, "courseNote");
        courseNoteRepository.save(unit_tests);
        CourseNote intro_to_pair_prog = new CourseNote("Intro to Pair Programming", "This will be the content of Command Line Basics", W1D3,  "courseNote");
        courseNoteRepository.save(intro_to_pair_prog);
        Lab functions_1 = new Lab("Functions 1", "Extensive Js Lab", W1D3,  "lab" );
        labRepository.save(functions_1);
        CourseNote loop_to_search_lists = new CourseNote("Loops to Search Lists", "This will be the content of Git and Github", W1D3, "courseNote");
        courseNoteRepository.save(loop_to_search_lists);
        Homework functions_2 = new Homework("Functions 2", "This will be the content of the Github Homework", W1D3,  "homework");
        homeworkRepository.save(functions_2);

        //Content Day W1D4
        CourseNote modules_and_packages = new CourseNote("Modules and Packages", "This will be the content of what is programming", W1D4, "courseNote");
        courseNoteRepository.save(modules_and_packages);
        Lab friends = new Lab("Friends", "Extensive Js Lab", W1D4,  "lab");
        labRepository.save(friends);

        //Content Day W1D5
        CourseNote pda_induction = new CourseNote("PDA Induction", "This will be the content of what is programming", W1D5, "courseNote");
        courseNoteRepository.save(pda_induction);
        Homework tdd_pet_shop = new Homework("TDD Petshop", "This will be the content of the Github Homework", W1D5,  "homework");
        homeworkRepository.save(tdd_pet_shop);
        CourseNote w1d5_recap = new CourseNote("PDA Induction", "This will be the content of what is programming", W1D5,  "courseNote");
        courseNoteRepository.save(w1d5_recap);

        //Content Day W2D1
        CourseNote pythonic_loops = new CourseNote("Pythonic Loops", "This will be the content of Command Line Basics", W2D1, "courseNote");
        courseNoteRepository.save(pythonic_loops);
        CourseNote data_structures_101 = new CourseNote("Data Structures 101", "This will be the content of Command Line Basics", W2D1, "courseNote");
        courseNoteRepository.save(data_structures_101);
        Lab functional_python = new Lab("Functional Python", "Extensive Js Lab", W2D1, "lab");
        labRepository.save(functional_python);
        Homework python_debugging_techniques = new Homework("Python Debugging Techniques", "This will be the content of the Github Homework", W2D1, "homework");
        homeworkRepository.save(python_debugging_techniques);

        //Content Day W2D2
        CourseNote object_orientated_p = new CourseNote("Object-Oriented Programming", "This will be the content of Command Line Basics", W2D2, "courseNote");
        courseNoteRepository.save(object_orientated_p);
        CourseNote file_io_mastery = new CourseNote("File I/O Mastery", "This will be the content of Command Line Basics", W2D2, "courseNote");
        courseNoteRepository.save(file_io_mastery);
        CourseNote advanced_topics_in_python= new CourseNote("Advanced Topics in Python", "This will be the content of Command Line Basics", W2D2, "courseNote");
        courseNoteRepository.save(advanced_topics_in_python);
        Lab web_scraping_with_python = new Lab("Web Scraping with Python", "Extensive Js Lab", W2D2, "lab");
        labRepository.save(web_scraping_with_python);

        //Content Day W2D3
        CourseNote data_analysis_with_pandas = new CourseNote("Data Analysis with Pandas", "This will be the content of Command Line Basics", W2D3, "courseNote");
        courseNoteRepository.save(data_analysis_with_pandas);
        CourseNote machine_learning_with_python = new CourseNote("Machine Learning with Python", "This will be the content of Command Line Basics", W2D3, "courseNote");
        courseNoteRepository.save(machine_learning_with_python);
        Lab numpy_array_operations = new Lab("Numpy Array Operations", "Extensive Js Lab", W2D3, "lab");
        labRepository.save(numpy_array_operations);
        Homework matplotlib_visualization = new Homework("Matplotlib Visualization", "This will be the content of the Github Homework", W2D3, "homework");
        homeworkRepository.save(matplotlib_visualization);

        //Content Day W2D4
        CourseNote text_processing_with_python = new CourseNote("Text Processing with Python", "This will be the content of Command Line Basics", W2D4, "courseNote");
        courseNoteRepository.save(text_processing_with_python);
        CourseNote web_development_with_django = new CourseNote("Web Development with Django", "This will be the content of Command Line Basics", W2D4,  "courseNote");
        courseNoteRepository.save(web_development_with_django);
        Lab multithreading_in_python = new Lab("Multithreading in Python", "Extensive Js Lab", W2D4,  "lab");
        labRepository.save(multithreading_in_python);
        Homework exploring_python_libraries = new Homework("Exploring Python Libraries", "This will be the content of the Github Homework", W2D4,  "homework");
        homeworkRepository.save(exploring_python_libraries);

        //Content Day W2D5
        CourseNote pda_w2_d5_homework = new CourseNote("PDA W2D5 Homework", "This will be the content of what is programming", W2D5,  "homework");
        courseNoteRepository.save(pda_w2_d5_homework);
        Homework weekend_flask_homework = new Homework("Weekend Homework - Building REST APIs with Flask", "This will be the content of the Github Homework", W2D5, "homework");
        homeworkRepository.save(weekend_flask_homework);
        CourseNote w2d5_recap = new CourseNote("Week 2 Recap", "This will be the content of what is programming", W2D5, "courseNote");
        courseNoteRepository.save(w2d5_recap);

        //Content Day W3D1
        CourseNote realtime_data_streaming = new CourseNote("Real-Time Data Streaming", "This will be the content of Command Line Basics", W3D1,   "courseNote");
        courseNoteRepository.save(realtime_data_streaming);
        CourseNote data_wrangling_with_python = new CourseNote("Data Wrangling with Python", "This will be the content of Command Line Basics", W3D1, "courseNote");
        courseNoteRepository.save(data_wrangling_with_python);
        Lab algorithm_design_with_python = new Lab("Algorithm Design with Python", "Extensive Js Lab", W3D1,  "lab");
        labRepository.save(algorithm_design_with_python);
        Homework automating_tasks_with_python = new Homework("Automating Tasks with Python", "This will be the content of the Github Homework", W3D1,  "homework");
        homeworkRepository.save(automating_tasks_with_python);

        //Content Day W3D2
        CourseNote big_data_processing_with_pySpark = new CourseNote("Big Data Processing with PySpark", "This will be the content of Command Line Basics", W3D2,  "courseNote");
        courseNoteRepository.save(big_data_processing_with_pySpark);
        CourseNote game_development_with_pygame= new CourseNote("Game Development with Pygame", "This will be the content of Command Line Basics", W3D2,  "courseNote");
        courseNoteRepository.save(game_development_with_pygame);
        CourseNote working_with_time_series_data = new CourseNote("Working with Time Series Data", "This will be the content of Command Line Basics", W3D2,  "courseNote");
        courseNoteRepository.save(working_with_time_series_data);
        CourseNote scipy_for_scientific_computing = new CourseNote("Scipy for Scientific Computing", "This will be the content of Command Line Basics", W3D2,  "courseNote");
        courseNoteRepository.save(scipy_for_scientific_computing);
        Lab networking_with_python = new Lab("Networking with Python", "Extensive Js Lab", W3D2,  "lab");
        labRepository.save(networking_with_python);
        Homework data_exploration_with_python = new Homework("Data Exploration with Python", "This will be the content of the Github Homework", W3D2,  "homework");
        homeworkRepository.save(data_exploration_with_python);

        //Content Day W3D3
        CourseNote data_cleaning_with_python = new CourseNote("Data Cleaning with Python", "This will be the content of Command Line Basics", W3D3,  "courseNote");
        courseNoteRepository.save(data_cleaning_with_python);
        CourseNote machine_learning_algorithms = new CourseNote("Machine Learning Algorithms", "This will be the content of Command Line Basics", W3D3,  "courseNote");
        courseNoteRepository.save(machine_learning_algorithms);
        Lab speech_processing_python = new Lab("Speech Processing with Python", "Extensive Js Lab", W3D3,  "lab");
        labRepository.save(speech_processing_python);
        Homework image_processing_with_python = new Homework("Image Processing with Python", "This will be the content of the Github Homework", W3D3,  "homework");
        homeworkRepository.save(image_processing_with_python);

        //Content Day W3D4
        CourseNote working_with_csv_files = new CourseNote("Working with CSV Files", "This will be the content of Command Line Basics", W3D4,  "courseNote");
        courseNoteRepository.save(working_with_csv_files);
        Lab building_web_crawlers = new Lab("Building Web Crawlers", "Extensive Js Lab", W3D4,  "lab");
        labRepository.save(building_web_crawlers);
        Homework time_series_analysis_with_python = new Homework("Time Series Analysis with Python", "This will be the content of the Github Homework", W3D4, "homework");
        homeworkRepository.save(time_series_analysis_with_python);

        //Content Day W3D5
        Homework weekend_data_homework = new Homework("Weekend Homework - Data Encryption with Python", "This will be the content of the Github Homework", W3D5,  "homework");
        homeworkRepository.save(weekend_data_homework);
        CourseNote w3d5_recap = new CourseNote("Week 3 Recap", "This will be the content of what is programming", W3D5,  "courseNote");
        courseNoteRepository.save(w3d5_recap);

        //Content Day W4D1
        CourseNote data_mining_with_python = new CourseNote("Data Mining with Python", "This will be the content of Command Line Basics", W4D1,  "courseNote");
        courseNoteRepository.save(data_mining_with_python);
        CourseNote building_image_classification_models = new CourseNote("Building Image Classification Models", "This will be the content of Command Line Basics", W4D1,  "courseNote");
        courseNoteRepository.save(building_image_classification_models);
        CourseNote data_analysis_with_jupyter_notebooks = new CourseNote("Data Analysis with Jupyter Notebooks", "This will be the content of Command Line Basics", W4D1,  "courseNote");
        courseNoteRepository.save(data_analysis_with_jupyter_notebooks);
        Lab exploring_unstructured_data_python = new Lab("Exploring Unstructured Data with Python", "Extensive Js Lab", W4D1,  "lab");
        labRepository.save(exploring_unstructured_data_python);
        Homework building_interactive_maps_with_folium = new Homework("Building Interactive Maps with Folium", "This will be the content of the Github Homework", W4D1,  "homework");
        homeworkRepository.save(building_interactive_maps_with_folium);

        //Content Day W4D2
        CourseNote data_manipulation_with_python = new CourseNote("Data Manipulation with Python", "This will be the content of Command Line Basics", W4D2,  "courseNote");
        courseNoteRepository.save(data_manipulation_with_python);
        CourseNote vr_with_python = new CourseNote("Building Virtual Reality Applications with Python", "This will be the content of Command Line Basics", W4D2,  "courseNote");
        courseNoteRepository.save(vr_with_python);
        Lab building_stock_market_analysers = new Lab("Building Stock Market Analyzers", "Extensive Js Lab", W4D2,  "lab");
        labRepository.save(building_stock_market_analysers);

        //Content Day W4D3
        Lab building_financial_models = new Lab("Building Financial Models with Python", "Extensive Js Lab", W4D3,   "lab");
        labRepository.save(building_financial_models);
        CourseNote building_social_media_analyzers = new CourseNote("Building Social Media Analyzers", "This will be the content of Command Line Basics", W4D3,  "courseNote");
        courseNoteRepository.save(building_social_media_analyzers);
        CourseNote data_transformation_with_pySpark = new CourseNote("Data Transformation with PySpark", "This will be the content of Command Line Basics", W4D3,  "courseNote");
        courseNoteRepository.save(data_transformation_with_pySpark);
        Homework data_management_with_python = new Homework("Data Management with Python", "This will be the content of the Github Homework", W4D3,  "homework");
        homeworkRepository.save(data_management_with_python);

        //Content Day W4D4
        CourseNote python_scripting_for_automation = new CourseNote("Python Scripting for Automation", "This will be the content of Command Line Basics", W4D4,  "courseNote");
        courseNoteRepository.save(python_scripting_for_automation);
        Lab data_science_with_python = new Lab("Data Science with Python", "Extensive Js Lab", W4D4,  "lab");
        labRepository.save(data_science_with_python);
        CourseNote building_chatbots_with_dialogflow = new CourseNote("Building Chatbots with Dialogflow", "This will be the content of Command Line Basics", W4D4,  "courseNote");
        courseNoteRepository.save(building_chatbots_with_dialogflow);
        CourseNote data_insights_with_python = new CourseNote("Data Insights with Python", "This will be the content of Command Line Basics", W4D4,  "courseNote");
        courseNoteRepository.save(data_insights_with_python);
        Homework python_project_handout = new Homework("Python Project Handout", "This will be the content of the Github Homework", W4D4,  "homework");
        homeworkRepository.save(python_project_handout);

        //Content Day W4D5
        CourseNote pda_python_project = new CourseNote("PDA Python Project Planning", "This will be the content of what is programming", W4D5,  "courseNote");
        courseNoteRepository.save(pda_python_project);
        Homework submit_project_briefs = new Homework("Submit Project Briefs", "This will be the content of the Github Homework", W4D5,  "homework");
        homeworkRepository.save(submit_project_briefs);
        CourseNote w4d5_recap = new CourseNote("PDA Induction", "This will be the content of what is programming", W4D5,  "courseNote");
        courseNoteRepository.save(w4d5_recap);

        //Content Day W5D1
        Homework python_projects = new Homework("Python Projects", "This will be the content of the Github Homework", W5D1,  "homework");
        homeworkRepository.save(python_projects);



        //MODULE 2 CONTENT

        //Content Day W6D1
        CourseNote javascript_basics = new CourseNote("JavaScript Basics", "This will be the content of JavaScript Fundamentals", W6D1,  "courseNote");
        courseNoteRepository.save(javascript_basics);
        CourseNote object_oriented_javascript = new CourseNote("Object-Oriented JavaScript", "This will be the content of Advanced JavaScript Techniques", W6D1,  "courseNote");
        courseNoteRepository.save(object_oriented_javascript);
        CourseNote functional_javascript = new CourseNote("Functional JavaScript", "This will be the content of Modern JavaScript Practices", W6D1,  "courseNote");
        courseNoteRepository.save(functional_javascript);
        Lab manipulating_the_dom = new Lab("Manipulating the DOM with JavaScript", "Extensive JavaScript Lab", W6D1,  "lab");
        labRepository.save(manipulating_the_dom);
        Homework javascript_events_handling = new Homework("Handling JavaScript Events", "This will be the content of the JavaScript Homework", W6D1,  "homework");
        homeworkRepository.save(javascript_events_handling);

        //Content Day W6D2
        CourseNote asynchronous_javascript = new CourseNote("Asynchronous JavaScript", "This will be the content of JavaScript Promises and Async/Await", W6D2,  "courseNote");
        courseNoteRepository.save(asynchronous_javascript);
        CourseNote building_javascript_applications = new CourseNote("Building JavaScript Applications", "This will be the content of JavaScript Frameworks and Libraries", W6D2,  "courseNote");
        courseNoteRepository.save(building_javascript_applications);
        Lab building_javascript_games = new Lab("Building JavaScript Games", "Extensive JavaScript Lab", W6D2,  "lab");
        labRepository.save(building_javascript_games);

        //Content Day W6D3
        Lab testing_javascript_applications = new Lab("Testing JavaScript Applications", "Extensive JavaScript Lab", W6D3,  "lab");
        labRepository.save(testing_javascript_applications);
        CourseNote building_javascript_plugins = new CourseNote("Building JavaScript Plugins", "This will be the content of JavaScript Libraries and Plugins", W6D3,  "courseNote");
        courseNoteRepository.save(building_javascript_plugins);
        CourseNote javascript_performance_optimization = new CourseNote("JavaScript Performance Optimization", "This will be the content of Advanced JavaScript Techniques", W6D3,  "courseNote");
        courseNoteRepository.save(javascript_performance_optimization);
        Homework building_javascript_widgets = new Homework("Building JavaScript Widgets", "This will be the content of the JavaScript Homework", W6D3,  "homework");
        homeworkRepository.save(building_javascript_widgets);

        //Content Day W6D4
        CourseNote serverless_javascript_architecture = new CourseNote("Serverless JavaScript Architecture", "This will be the content of Serverless JavaScript", W6D4,  "courseNote");
        courseNoteRepository.save(serverless_javascript_architecture);
        Lab building_javascript_APIs = new Lab("Building JavaScript APIs", "Extensive JavaScript Lab", W6D4,  "lab");
        labRepository.save(building_javascript_APIs);
        CourseNote real_time_javascript_applications = new CourseNote("Building Real-time JavaScript Applications", "This will be the content of WebSockets and Real-time Data", W4D4,  "courseNote");
        courseNoteRepository.save(real_time_javascript_applications);


        //Content Day W6D5
        CourseNote building_interactive_dashboards = new CourseNote("Building Interactive Dashboards with React and D3", "This will be the content of what is programming", W6D5,  "courseNote");
        courseNoteRepository.save(building_interactive_dashboards);
        Homework javaScript_performance_optimizations = new Homework("JavaScript Performance Optimization", "This will be the content of the Github Homework", W6D5,  "homework");
        homeworkRepository.save(javaScript_performance_optimizations);
        CourseNote w6d5_recap = new CourseNote("Weekly Recap - W6D5", "This will be the content of what is programming", W6D5,  "courseNote");
        courseNoteRepository.save(w6d5_recap);


        //Content Day W7D1
        CourseNote dom_manipulation = new CourseNote("DOM Manipulation with JavaScript", "Understand how to manipulate the Document Object Model", W7D1,  "courseNote");
        courseNoteRepository.save(dom_manipulation);
        CourseNote js_and_html = new CourseNote("Integrating JavaScript with HTML", "Learn how to add JavaScript to your HTML pages", W7D1,  "courseNote");
        courseNoteRepository.save(js_and_html);
        Lab js_functions = new Lab("JavaScript Functions", "Practice using functions in JavaScript", W7D1,   "lab");
        labRepository.save(js_functions);
        Homework js_arrays = new Homework("JavaScript Arrays", "Learn about arrays in JavaScript and complete exercises", W7D1,  "homework");
        homeworkRepository.save(js_arrays);

        //Content Day W7D2
        CourseNote js_objects = new CourseNote("JavaScript Objects", "Learn about objects in JavaScript and how to use them", W7D2,  "courseNote");
        courseNoteRepository.save(js_objects);
        CourseNote js_events = new CourseNote("JavaScript Events", "Understand how to use events in JavaScript to create interactive web pages", W7D2,  "courseNote");
        courseNoteRepository.save(js_events);
        Lab js_conditional_statements = new Lab("JavaScript Conditional Statements", "Practice using conditional statements in JavaScript", W7D2,  "lab");
        labRepository.save(js_conditional_statements);

        //Content Day W7D3
        Lab js_loops = new Lab("JavaScript Loops", "Practice using loops in JavaScript", W7D3, "lab");
        labRepository.save(js_loops);
        CourseNote js_forms = new CourseNote("JavaScript and Forms", "Learn how to use JavaScript to process form data", W7D3,  "courseNote");
        courseNoteRepository.save(js_forms);
        CourseNote ajax_with_js = new CourseNote("AJAX with JavaScript", "Understand how to use AJAX in JavaScript to dynamically update web pages", W7D3,  "courseNote");
        courseNoteRepository.save(ajax_with_js);
        Homework js_debugging = new Homework("JavaScript Debugging", "Learn about common debugging techniques in JavaScript and complete exercises", W7D3,  "homework");
        homeworkRepository.save(js_debugging);

        //Content Day W7D4
        CourseNote js_best_practices = new CourseNote("JavaScript Best Practices", "Learn about best practices in JavaScript programming", W7D4,  "courseNote");
        courseNoteRepository.save(js_best_practices);
        Lab js_object_oriented_programming = new Lab("JavaScript Object-Oriented Programming", "Practice using OOP in JavaScript", W7D4,  "lab");
        labRepository.save(js_object_oriented_programming);
        CourseNote js_and_jquery = new CourseNote("JavaScript and jQuery", "Learn how to use the jQuery library with JavaScript", W7D4,  "courseNote");
        courseNoteRepository.save(js_and_jquery);

        //Content Day W7D5
        CourseNote javaScript_testing_with_jest = new CourseNote("JavaScript Testing with Jest", "This will be the content of what is programming", W7D5,  "courseNote");
        courseNoteRepository.save(javaScript_testing_with_jest);
        Homework server_side_rendered = new Homework("Building Server-Side Rendered React Applications", "This will be the content of the Github Homework", W7D5,  "homework");
        homeworkRepository.save(server_side_rendered);
        CourseNote w7d5_recap = new CourseNote("Weekly Recap - W6D5", "This will be the content of what is programming", W7D5,  "courseNote");
        courseNoteRepository.save(w7d5_recap);


        // Content Day W8D1
        CourseNote react_components = new CourseNote("React Components", "Learn the basics of creating components in React", W8D1,  "courseNote");
        courseNoteRepository.save(react_components);
        CourseNote react_props = new CourseNote("React Props and State", "Understand how to use props and state in React", W8D1,  "courseNote");
        courseNoteRepository.save(react_props);
        CourseNote react_routing = new CourseNote("React Routing", "Learn how to add routing to your React app", W8D1,  "courseNote");
        courseNoteRepository.save(react_routing);
        Lab react_lifecycle_methods = new Lab("React Lifecycle Methods", "Practice using React's lifecycle methods", W8D1,  "lab");
        labRepository.save(react_lifecycle_methods);
        Homework react_hooks = new Homework("React Hooks", "Learn about hooks in React and complete exercises", W8D1,  "homework");
        homeworkRepository.save(react_hooks);

        // Content Day W8D2
        CourseNote react_context_api = new CourseNote("React Context API", "Learn about the Context API in React and how to use it", W8D2,  "courseNote");
        courseNoteRepository.save(react_context_api);
        CourseNote react_flux = new CourseNote("React and the Flux Architecture", "Understand how to use the Flux architecture in React", W8D2,  "courseNote");
        courseNoteRepository.save(react_flux);
        Lab react_redux = new Lab("React and Redux", "Practice using Redux in React", W8D2,  "lab");
        labRepository.save(react_redux);

        // Content Day W8D3
        Lab react_testing = new Lab("React Testing", "Practice testing in React", W8D3,  "lab");
        labRepository.save(react_testing);
        CourseNote react_tooling = new CourseNote("React Tooling", "Learn about tools and packages used in React development", W8D3,  "courseNote");
        courseNoteRepository.save(react_tooling);
        CourseNote react_performance = new CourseNote("React Performance", "Understand how to optimize the performance of your React app", W8D3,  "courseNote");
        courseNoteRepository.save(react_performance);
        Homework react_server_side_rendering = new Homework("React Server-Side Rendering", "Learn about server-side rendering in React and complete exercises", W8D3,  "homework");
        homeworkRepository.save(react_server_side_rendering);

        // Content Day W8D4
        CourseNote react_deployment = new CourseNote("React Deployment", "Learn about deployment options for React apps", W8D4,  "courseNote");
        courseNoteRepository.save(react_deployment);
        Lab react_animations = new Lab("React Animations", "Practice creating animations in React", W8D4,  "lab");
        labRepository.save(react_animations);
        CourseNote react_advanced_topics = new CourseNote("React Advanced Topics", "Learn about advanced topics in React development", W8D4,  "courseNote");
        courseNoteRepository.save(react_advanced_topics);

        //Content Day W8D5
        CourseNote javaScript_debugging_techniques = new CourseNote("JavaScript Debugging Techniques", "This will be the content of what is programming", W8D5,  "courseNote");
        courseNoteRepository.save(javaScript_debugging_techniques);
        Homework building_single_page = new Homework("Building Single Page Applications with React Router", "This will be the content of the Github Homework", W8D5,  "homework");
        homeworkRepository.save(building_single_page);
        CourseNote w8d5_recap = new CourseNote("Weekly Recap - W6D5", "This will be the content of what is programming", W8D5,  "courseNote");
        courseNoteRepository.save(w8d5_recap);


        //Content Day W9D1
        CourseNote advanced_js_concepts = new CourseNote("Advanced JavaScript Concepts", "Learn about advanced concepts in JavaScript programming", W9D1,  "courseNote");
        courseNoteRepository.save(advanced_js_concepts);
        CourseNote react_basics = new CourseNote("React Basics", "Learn the basics of React and how to use it for building web applications", W9D1, "courseNote");
        courseNoteRepository.save(react_basics);
        CourseNote jsx_in_react = new CourseNote("JSX in React", "Understand how to use JSX to write components in React", W9D1,  "courseNote");
        courseNoteRepository.save(jsx_in_react);
        Lab state_and_props = new Lab("State and Props in React", "Practice using state and props in React", W9D1,   "lab");
        labRepository.save(state_and_props);
        Homework advanced_react_routing = new Homework("React Routing", "Learn about routing in React and complete exercises", W9D1,  "homework");
        homeworkRepository.save(advanced_react_routing);

        //Content Day W9D2
        CourseNote react_forms = new CourseNote("React Forms", "Learn about forms in React and how to handle form submissions", W9D2,  "courseNote");
        courseNoteRepository.save(react_forms);
        CourseNote custom_react_hooks = new CourseNote("React Hooks", "Understand how to use hooks in React for state management and side effects", W9D2,  "courseNote");
        courseNoteRepository.save(custom_react_hooks);
        Lab higher_order_components = new Lab("Higher Order Components in React", "Practice using higher order components in React", W9D2,  "lab");
        labRepository.save(higher_order_components);

        //Content Day W9D3
        Lab context_api = new Lab("Context API in React", "Practice using the Context API in React for data management", W9D3,  "lab");
        labRepository.save(context_api);
        CourseNote advanced_js_patterns = new CourseNote("Advanced JavaScript Patterns", "Learn about advanced design patterns in JavaScript", W9D3,  "courseNote");
        courseNoteRepository.save(advanced_js_patterns);
        CourseNote javaScript_modules_and_namespaces = new CourseNote("JavaScript Modules and Namespaces", "Understand how to optimize performance in React", W9D3,  "courseNote");
        courseNoteRepository.save(javaScript_modules_and_namespaces);
        Homework react_state = new Homework("React State Management", "Learn about state management in React and complete exercises", W9D3,   "homework");
        homeworkRepository.save(react_state);

        //Content Day W9D4
        CourseNote react_best_practices = new CourseNote("React Best Practices", "Learn about best practices in React programming", W9D4,  "courseNote");
        courseNoteRepository.save(react_best_practices);
        Lab building_rta_react_firebase = new Lab("Building Real-time Applications with React and Firebase", "Practice using animations in React", W9D4,  "lab");
        labRepository.save(building_rta_react_firebase);
        CourseNote building_dynamic_forms_with_react = new CourseNote("Building Dynamic Forms with React", "Learn about server side rendering in React and how to use it", W9D4,  "courseNote");
        courseNoteRepository.save(building_dynamic_forms_with_react);

        //Content Day W9D5
        CourseNote pda_javascript_python_project = new CourseNote("PDA JS Projects", "This will be the content of what is programming", W9D5,  "courseNote");
        courseNoteRepository.save(pda_javascript_python_project);
        Homework submit_js_project_briefs = new Homework("Submit JS Project Briefs", "This will be the content of the Github Homework", W9D5,  "homework");
        homeworkRepository.save(submit_js_project_briefs);
        CourseNote w9d5_recap = new CourseNote("Weekly Recap - Week 9", "This will be the content of what is programming", W9D5,  "courseNote");
        courseNoteRepository.save(w9d5_recap);

        //Content Day W10D1
        Homework js_projects = new Homework("JS Projects", "This will be the content of the Github Homework", W10D1,  "homework");
        homeworkRepository.save(js_projects);


        //MODULE 3 CONTENT

        //Content Day W12D1
        CourseNote java_basics = new CourseNote("Java Fundamentals", "This will be the content of Java Fundamentals", W12D1,  "courseNote");
        courseNoteRepository.save(java_basics);
        CourseNote object_oriented_java = new CourseNote("Object-Oriented Java", "This will be the content of Advanced Java Techniques", W12D1,  "courseNote");
        courseNoteRepository.save(object_oriented_java);
        CourseNote functional_java = new CourseNote("Functional Java", "This will be the content of Modern Java Practices", W12D1,  "courseNote");
        courseNoteRepository.save(functional_java);
        Lab manipulating_java_structures = new Lab("Manipulating Java Structures", "Extensive Java Lab", W12D1,  "lab");
        labRepository.save(manipulating_java_structures);
        Homework java_exceptions_handling = new Homework("Handling Java Exceptions", "This will be the content of the Java Homework", W12D1,  "homework");
        homeworkRepository.save(java_exceptions_handling);

        //Content Day W12D2
        CourseNote multithreaded_java = new CourseNote("Multithreaded Java", "This will be the content of Java Concurrency and Threads", W12D2,  "courseNote");
        courseNoteRepository.save(multithreaded_java);
        CourseNote building_java_applications = new CourseNote("Building Java Applications", "This will be the content of Java Frameworks and Libraries", W12D2,  "courseNote");
        courseNoteRepository.save(building_java_applications);
        Lab building_java_games = new Lab("Building Java Games", "Extensive Java Lab", W12D2,  "lab");
        labRepository.save(building_java_games);

        //Content Day W12D3
        Lab testing_java_applications = new Lab("Testing Java Applications", "Extensive Java Lab", W12D3,  "lab");
        labRepository.save(testing_java_applications);
        CourseNote building_java_plugins = new CourseNote("Building Java Plugins", "This will be the content of Java Libraries and Plugins", W12D3,  "courseNote");
        courseNoteRepository.save(building_java_plugins);
        CourseNote java_performance_optimization = new CourseNote("Java Performance Optimization", "This will be the content of Advanced Java Techniques", W12D3,  "courseNote");
        courseNoteRepository.save(java_performance_optimization);
        Homework building_java_widgets = new Homework("Building Java Widgets", "This will be the content of the Java Homework", W12D3,  "homework");
        homeworkRepository.save(building_java_widgets);

        //Content Day W12D4
        CourseNote serverless_java_architecture = new CourseNote("Serverless Java Architecture", "This will be the content of Serverless Java", W12D4,  "courseNote");
        courseNoteRepository.save(serverless_java_architecture);
        Lab building_java_APIs = new Lab("Building Java APIs", "Extensive Java Lab", W12D4,  "lab");
        labRepository.save(building_java_APIs);
        CourseNote real_time_java_applications = new CourseNote("Building Real-time Java Applications", "This will be the content of Real Time", W12D4,  "courseNote");
        courseNoteRepository.save(real_time_java_applications);

        //Content Day W12D5
        CourseNote spring_cloud_architecture = new CourseNote("Spring Cloud Architecture", "This will be the content of Cloud-Native Applications with Spring Cloud", W12D5,  "courseNote");
        courseNoteRepository.save(spring_cloud_architecture);
        CourseNote spring_security_best_practices = new CourseNote("Spring Security Best Practices", "This will be the content of Advanced Spring Security Techniques", W12D5,  "courseNote");
        courseNoteRepository.save(spring_security_best_practices);
        Homework spring_boot_advanced_topics = new Homework("Spring Boot Advanced Topics", "This will be the content of the Advanced Spring Boot Homework", W12D5,  "homework");
        homeworkRepository.save(spring_boot_advanced_topics);
        CourseNote w12d5_recap = new CourseNote("Weekly Recap - W12D5", "This will be the content of what is programming", W12D5,  "courseNote");
        courseNoteRepository.save(w12d5_recap);

        //Content Day W13D1
        CourseNote advanced_java_fundamentals = new CourseNote("Advanced Java Fundamentals", "This will be the content of Advanced Java Fundamentals", W13D1,  "courseNote");
        courseNoteRepository.save(advanced_java_fundamentals);
        CourseNote design_patterns_in_java = new CourseNote("Design Patterns in Java", "This will be the content of Design Patterns in Java", W13D1,  "courseNote");
        courseNoteRepository.save(design_patterns_in_java);
        CourseNote multithreading_in_java = new CourseNote("Multithreading in Java", "This will be the content of Multithreading in Java", W13D1,  "courseNote");
        courseNoteRepository.save(multithreading_in_java);
        Lab concurrency_in_java = new Lab("Concurrency in Java", "Extensive Java Lab on Concurrency", W13D1,  "lab");
        labRepository.save(concurrency_in_java);
        Homework exception_handling_in_java = new Homework("Exception Handling in Java", "This will be the content of Exception Handling in Java Homework", W13D1,  "homework");
        homeworkRepository.save(exception_handling_in_java);

        //Content Day W13D2
        CourseNote network_programming_in_java = new CourseNote("Network Programming in Java", "This will be the content of Network Programming in Java", W13D2,  "courseNote");
        courseNoteRepository.save(network_programming_in_java);
        CourseNote databases_in_java = new CourseNote("Databases in Java", "This will be the content of Databases in Java", W13D2,  "courseNote");
        courseNoteRepository.save(databases_in_java);
        Lab java_web_applications = new Lab("Building Java Web Applications", "Extensive Java Lab on Building Java Web Applications", W13D2,  "lab");
        labRepository.save(java_web_applications);

        //Content Day W13D3
        CourseNote advanced_java_concepts = new CourseNote("Advanced Java Concepts", "This will be the content of Advanced Java Techniques", W13D3,  "courseNote");
        courseNoteRepository.save(advanced_java_concepts);
        CourseNote spring_framework = new CourseNote("Spring Framework", "This will be the content of Developing Applications with Spring", W13D3,  "courseNote");
        courseNoteRepository.save(spring_framework);
        Lab spring_security = new Lab("Spring Security", "Extensive Spring Security Lab", W13D3,  "lab");
        labRepository.save(spring_security);
        Homework spring_boot = new Homework("Spring Boot", "This will be the content of the Spring Boot Homework", W13D3,  "homework");
        homeworkRepository.save(spring_boot);

        //Content Day W13D4
        CourseNote spring_data_jpa = new CourseNote("Spring Data JPA", "This will be the content of Data Access with Spring Data JPA", W13D4,  "courseNote");
        courseNoteRepository.save(spring_data_jpa);
        CourseNote spring_web_services = new CourseNote("Spring Web Services", "This will be the content of Building RESTful Web Services with Spring", W13D4,  "courseNote");
        courseNoteRepository.save(spring_web_services);
        Lab building_spring_based_microservices = new Lab("Building Spring-based Microservices", "Extensive Spring Microservices Lab", W13D4,  "lab");
        labRepository.save(building_spring_based_microservices);

        //Content Day W13D5
        CourseNote cloud_native_spring_architecture = new CourseNote("Cloud-Native Spring Architecture", "This will be the content of Cloud-Native Architecture with Spring", W13D5,  "courseNote");
        courseNoteRepository.save(cloud_native_spring_architecture);
        CourseNote deploying_spring_applications = new CourseNote("Deploying Spring Applications", "This will be the content of Deploying Spring Applications in Production", W13D5,  "courseNote");
        courseNoteRepository.save(deploying_spring_applications);
        Homework additional_spring_boot_advanced_topics = new Homework("Additional Spring Boot Advanced Topics", "This will be the content of the Advanced Spring Boot Homework", W13D5,  "homework");
        homeworkRepository.save(additional_spring_boot_advanced_topics);
        CourseNote w13d5_recap = new CourseNote("Weekly Recap - W13D5", "This will be the content of what is programming", W13D5,  "courseNote");
        courseNoteRepository.save(w13d5_recap);


        //Content Day W14D1
        CourseNote spring_core = new CourseNote("Spring Core Fundamentals", "This will be the content of Spring Core", W14D1,  "courseNote");
        courseNoteRepository.save(spring_core);
        CourseNote spring_data_access = new CourseNote("Spring Data Access", "This will be the content of Spring Data Access and JPA", W14D1,  "courseNote");
        courseNoteRepository.save(spring_data_access);
        CourseNote spring_web_mvc = new CourseNote("Spring Web MVC", "This will be the content of Spring Web MVC and RESTful Services", W14D1,  "courseNote");
        courseNoteRepository.save(spring_web_mvc);
        Lab spring_mvc_lab = new Lab("Building a Spring MVC Application", "Extensive Spring MVC Lab", W14D1,  "lab");
        labRepository.save(spring_mvc_lab);
        Homework spring_mvc_homework = new Homework("Spring MVC Homework", "This will be the content of the Spring MVC Homework", W14D1,  "homework");
        homeworkRepository.save(spring_mvc_homework);

        //Content Day W14D2
        CourseNote serverless_spring_architecture = new CourseNote("Serverless Spring Architecture", "This will be the content of Serverless Spring", W14D2,  "courseNote");
        courseNoteRepository.save(serverless_spring_architecture);
        Lab building_spring_APIs = new Lab("Building Spring APIs", "Extensive Spring Lab", W14D2,  "lab");
        labRepository.save(building_spring_APIs);
        Lab building_spring_boot_applications = new Lab("Building Spring Boot Applications", "Extensive Spring Boot Lab", W14D2,  "lab");
        labRepository.save(building_spring_boot_applications);

        //Content Day W14D3
        Lab testing_spring_applications = new Lab("Testing Spring Applications", "Extensive Spring Testing Lab", W14D3,  "lab");
        labRepository.save(testing_spring_applications);
        CourseNote building_spring_plugins = new CourseNote("Building Spring Plugins", "This will be the content of Spring Plugins and Integration", W14D3,  "courseNote");
        courseNoteRepository.save(building_spring_plugins);
        CourseNote spring_performance_optimization = new CourseNote("Spring Performance Optimization", "This will be the content of Advanced Spring Techniques", W14D3,  "courseNote");
        courseNoteRepository.save(spring_performance_optimization);
        Homework building_spring_widgets = new Homework("Building Spring Widgets", "This will be the content of the Spring Homework", W14D3,  "homework");
        homeworkRepository.save(building_spring_widgets);

        //Content Day W14D4
        CourseNote java_best_practices = new CourseNote("Java Best Practices", "Learn about best practices in React programming", W14D4,  "courseNote");
        courseNoteRepository.save(java_best_practices);
        Lab building_rta_java_firebase = new Lab("Building Real-time Applications with Java and Firebase", "Practice using animations in React", W14D4,  "lab");
        labRepository.save(building_rta_java_firebase);
        CourseNote building_dynamic_forms_with_java = new CourseNote("Building Dynamic Forms with Java", "Learn about server side rendering in React and how to use it", W14D4,  "courseNote");
        courseNoteRepository.save(building_dynamic_forms_with_java);

        //Content Day W14D5
        CourseNote pda_java_project = new CourseNote("PDA JS Projects", "This will be the content of what is programming", W14D5,   "courseNote");
        courseNoteRepository.save(pda_java_project);
        Homework submit_java_project_briefs = new Homework("Submit JS Project Briefs", "This will be the content of the Github Homework", W14D5,  "homework");
        homeworkRepository.save(submit_java_project_briefs);
        CourseNote w14d5_recap = new CourseNote("Weekly Recap - Week 14", "This will be the content of what is programming", W14D5,   "courseNote");
        courseNoteRepository.save(w14d5_recap);

        //Content Day W15D1
        Homework java_projects = new Homework("Java Projects Week 1", "This will be the content of the Github Homework", W15D1,  "homework");
        homeworkRepository.save(java_projects);

        //Content Day W16D1
        Homework java_projects_week2 = new Homework("Java Projects Week 2", "This will be the content of the Github Homework", W16D1,   "homework");
        homeworkRepository.save(java_projects_week2);

        //Students
        Student Poppy = new Student("Poppy", "Dalglish", "dp@gmail.fun", 07774564534L, "12/12/1993", "I am a student");
        studentRepository.save(Poppy);
        Student John = new Student("John", "Johnson", "johnson@john.fun", 07774554534L, "12/12/1923", "I am an old student");
        studentRepository.save(John);
        Student Mikhayla = new Student("Mikhayla", "Dunno", "email@gmail.fun", 74801923L, "12/12/1991", "I am a codeclan student");
        studentRepository.save(Mikhayla);
        Student Sarah = new Student("Sarah", "Smith", "sarahsmith@gmail.fun", 07776565434L, "01/05/1995", "I am a hardworking student who loves coding.");
        studentRepository.save(Sarah);
        Student Michael = new Student("Michael", "Brown", "mbrown@yahoo.fun", 07775674L, "02/08/1997", "I am a creative and enthusiastic student who loves challenges.");
        studentRepository.save(Michael);
        Student Emily = new Student("Emily", "Jones", "emilyjones@hotmail.fun", 077757434L, "04/07/1994", "I am a determined and goal-oriented student who is passionate about technology.");
        studentRepository.save(Emily);
        Student Daniel = new Student("Daniel", "Davis", "ddavis@gmail.fun", 74801923L, "06/12/1996", "I am a tech-savvy student who is always eager to learn new things.");
        studentRepository.save(Daniel);
        Student Lauren = new Student("Lauren", "Wilson", "lwilson@gmail.fun", 07775674534L, "08/03/1995", "I am a curious and dedicated student who enjoys problem-solving.");
        studentRepository.save(Lauren);
        Student Anna = new Student("Anna", "Smith", "anna.smith@gmail.fun", 07774574531L, "03/07/1997", "I am a curious learner always seeking new challenges");
        studentRepository.save(Anna);
        Student Jake = new Student("Jake", "Williams", "jake.williams@yahoo.fun", 07774574532L, "05/12/1995", "I am a tech enthusiast who is passionate about programming and solving problems");
        studentRepository.save(Jake);

        //Teachers and Students
        Teacher mar = new Teacher("Mar", "Beveridge", "mar@codeclan.com", 066L, "8/12/1994", "I like teaching code", "Instructor");
        teacherRepository.save(mar);
        Teacher bob = new Teacher("Bob", "Bobson", "bobson@codeclan.com", 28594039L, "8/12/2018", "I am smart person", "King Instructor");
        teacherRepository.save(bob);
        Teacher dick = new Teacher("Dick", "Dickson", "dick.dickson@gmail.fun", 91348930L, "06/02/2023", "My name is Dick Dickson and I teach coding", "Small Instructor");
        teacherRepository.save(dick);


        // Add Completions and Submissions

        Completion completion1 = new Completion(list_and_dictionaries_lab, Poppy);
        completionRepository.save(completion1);

        Submission submission1 = new Submission(submit_to_github, Poppy, "poppy.github.com", 5, "I dunno how to use github");
        submissionRepository.save(submission1);

    }
}