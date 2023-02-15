import { useEffect, useState } from 'react';
import styled from 'styled-components';
import CourseService from '../../service/CourseService';
import DailyDropDown from './DailyDropDown';
import WeeklyDropDown from './WeeklyDropDown';

const Course = () => {
    const [course, setCourse] = useState();
    const [openWeekNumber, setOpenWeekNumber] = useState<any>();
    const [openDayNumber, setOpenDayNumber] = useState<any>(1);
    const [colorChangeListener, setColorChangeListener] = useState<number>(0)

    useEffect(() => {
        CourseService.getCourses().then((course) => setCourse(course));
    }, [colorChangeListener]);

    return (
        <>
            <HeaderCourse>Professional Software Development</HeaderCourse>
            <CourseSection>
                {course ? (
                    <>
                        <WeeklyDropDown
                            course={course}
                            setOpenWeekNumber={setOpenWeekNumber}
                            setOpenDayNumber={setOpenDayNumber}
                            openWeekNumber={openWeekNumber}
                        />
                        <DailyDropDown
                            course={course}
                            openWeekNumber={openWeekNumber}
                            openDayNumber={openDayNumber}
                            setColorChangeListener = {setColorChangeListener}
                            colorChangeListener = {colorChangeListener}
                        />
                    </>
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

const HeaderCourse = styled.h1`
    text-align: center;
    padding:1rem;
`;
