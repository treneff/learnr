import CourseModuleNav from './CourseModuleNav';
import WeeklyDropDown from './WeeklyDropDown';

const Course = () => {
    return (
        <>
            <CourseModuleNav />
            <section>
                <div>
                    <WeeklyDropDown />
                </div>
                <div>
                    <div>Content of the lesson</div>
                    <div>Lab</div>
                    <div>Homework</div>
                </div>
            </section>
        </>
    );
};

export default Course;
