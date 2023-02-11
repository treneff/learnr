import styled from 'styled-components';

import WeekListItem from './WeekListItem';
interface CourseProps {
    course: any|number;
    setOpenWeekNumber: React.Dispatch<React.SetStateAction<number>>
    setOpenDayNumber: React.Dispatch<React.SetStateAction<number>>
}

const WeeklyDropDown: React.FC<CourseProps> = ({course,setOpenWeekNumber,setOpenDayNumber}) => {
    
    return (
        <WeeklyList>
            <WeekListItem weekNumber={1} course={course} setOpenWeekNumber = {setOpenWeekNumber} setOpenDayNumber = {setOpenDayNumber} />
            <WeekListItem weekNumber={2} course={course} setOpenWeekNumber = {setOpenWeekNumber} setOpenDayNumber = {setOpenDayNumber}/>
            <WeekListItem weekNumber={3} course={course} setOpenWeekNumber = {setOpenWeekNumber} setOpenDayNumber = {setOpenDayNumber}/>
            <WeekListItem weekNumber={4} course={course} setOpenWeekNumber = {setOpenWeekNumber} setOpenDayNumber = {setOpenDayNumber}/>
            <WeekListItem weekNumber={5} course={course} setOpenWeekNumber = {setOpenWeekNumber} setOpenDayNumber = {setOpenDayNumber}/>
            <WeekListItem weekNumber={6} course={course} setOpenWeekNumber = {setOpenWeekNumber} setOpenDayNumber = {setOpenDayNumber}/>
            <WeekListItem weekNumber={7} course={course} setOpenWeekNumber = {setOpenWeekNumber} setOpenDayNumber = {setOpenDayNumber}/>
            <WeekListItem weekNumber={8} course={course} setOpenWeekNumber = {setOpenWeekNumber} setOpenDayNumber = {setOpenDayNumber}/>
            <WeekListItem weekNumber={9} course={course} setOpenWeekNumber = {setOpenWeekNumber} setOpenDayNumber = {setOpenDayNumber}/>
            <WeekListItem weekNumber={10} course={course} setOpenWeekNumber = {setOpenWeekNumber} setOpenDayNumber = {setOpenDayNumber}/>
            <WeekListItem weekNumber={11} course={course} setOpenWeekNumber = {setOpenWeekNumber} setOpenDayNumber = {setOpenDayNumber}/>
            <WeekListItem weekNumber={12} course={course} setOpenWeekNumber = {setOpenWeekNumber} setOpenDayNumber = {setOpenDayNumber}/>
            <WeekListItem weekNumber={13} course={course} setOpenWeekNumber = {setOpenWeekNumber} setOpenDayNumber = {setOpenDayNumber}/>
            <WeekListItem weekNumber={14} course={course} setOpenWeekNumber = {setOpenWeekNumber} setOpenDayNumber = {setOpenDayNumber}/>
            <WeekListItem weekNumber={15} course={course} setOpenWeekNumber = {setOpenWeekNumber} setOpenDayNumber = {setOpenDayNumber}/>
            <WeekListItem weekNumber={16} course={course} setOpenWeekNumber = {setOpenWeekNumber} setOpenDayNumber = {setOpenDayNumber}/>
        </WeeklyList>
    );
};

export default WeeklyDropDown;

const WeeklyList = styled.ul`
    width: 40vw;
    background-color:#F5F3F3;
    padding:2rem;
    overflow:auto;
`;
