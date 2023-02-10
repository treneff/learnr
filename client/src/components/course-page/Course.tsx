import { useEffect, useState } from 'react';
import styled from 'styled-components';
import CourseService from '../../service/CourseService';
import DailyContent from './DailyContent';
import CourseModuleNav from './CourseModuleNav';
import WeeklyDropDown from './WeeklyDropDown';

const Course = () => {
    const [course, setCourse] = useState();
    const [openContent, setOpenContent] = useState();

    useEffect(() => {
        CourseService.getCourses().then((course) => setCourse(course));
    }, []);

    const getOpenContent = (content: any) => {
        setOpenContent(content);
    };
    return (
        <>
            <CourseModuleNav />
            <CourseSection>
                {course ? <WeeklyDropDown course={course} getOpenContent={getOpenContent} /> : null}
                <DailyContent />
            </CourseSection>
        </>
    );
};

export default Course;

const CourseSection = styled.section`
    height: 80vh;
    overflow: hidden;
    display: flex;
    gap: 1rem;
    justify-content: space-around;
`;
