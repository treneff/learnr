import styled from 'styled-components';
import CourseModuleNav from './CourseModuleNav';
import WeeklyDropDown from './WeeklyDropDown';

const Course = () => {
    const CourseSection = styled.section`
        border: 5px solid black;
        height: 80vh;
        overflow: hidden;
        display:flex;
        justify-content:center;
    `;

    const DailyContent = styled.div`
        width: 50vw;
    `

    return (
        <>
            <CourseModuleNav />
            <CourseSection>
                <WeeklyDropDown />
                <DailyContent>
                    <div>Content of the lesson</div>
                    <div>Lab</div>
                    <div>Homework</div>
                </DailyContent>
            </CourseSection>
        </>
    );
};

export default Course;
