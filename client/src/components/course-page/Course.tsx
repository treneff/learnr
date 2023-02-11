import { useEffect, useState } from 'react';
import styled from 'styled-components';
import CourseService from '../../service/CourseService';
import DailyContent from './DailyContent';
import CourseModuleNav from './CourseModuleNav';
import WeeklyDropDown from './WeeklyDropDown';

const Course = () => {
    const [course, setCourse] = useState();
    const [openWeekNumber, setOpenWeekNumber] = useState<any>();
    const [openDayNumber,setOpenDayNumber] = useState<any>();


    useEffect(() => {
        CourseService.getCourses().then((course) => setCourse(course));
    }, []);


    return (
        <>
            <CourseModuleNav />
            <CourseSection>
                {course ? <WeeklyDropDown course={course} setOpenWeekNumber={setOpenWeekNumber} setOpenDayNumber={setOpenDayNumber} /> : null}
                {course? <DailyContent course = {course} openWeekNumber = {openWeekNumber} openDayNumber ={openDayNumber} />:null}
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
