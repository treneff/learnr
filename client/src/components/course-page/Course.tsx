import { useEffect, useState } from 'react';
import styled from 'styled-components';
import CourseService from '../../service/CourseService';
import DailyDropDown from './DailyDropDown';
import WeeklyDropDown from './WeeklyDropDown';

const Course = () => {
    const [course, setCourse] = useState();
    const [openWeekNumber, setOpenWeekNumber] = useState<any>();
    const [openDayNumber, setOpenDayNumber] = useState<any>(1);

    useEffect(() => {
        CourseService.getCourses().then((course) => setCourse(course));
    }, []);

    return (
        <>
            <h1>Professional Software Development</h1>
            <CourseSection>
                {course ? (
                    <WeeklyDropDown
                        course={course}
                        setOpenWeekNumber={setOpenWeekNumber}
                        setOpenDayNumber={setOpenDayNumber}
                        openWeekNumber={openWeekNumber}
                    />
                ) : null}
                {course ? (
                    <DailyDropDown
                        course={course}
                        openWeekNumber={openWeekNumber}
                        openDayNumber={openDayNumber}
                    />
                ) : null}
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
