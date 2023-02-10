import { useEffect } from 'react';
import styled from 'styled-components';
import DailyContent from './DailyContent';
import CourseModuleNav from './CourseModuleNav';
import WeeklyDropDown from './WeeklyDropDown';

const Course = () => {
    return (
        <>
            <CourseModuleNav />
            <CourseSection>
                <WeeklyDropDown />
                <DailyContent/>
            </CourseSection>
        </>
    );
};

export default Course;

const CourseSection = styled.section`
    
    height: 80vh;
    overflow: hidden;
    display: flex;
    gap:5rem;
    justify-content: center;
`;


