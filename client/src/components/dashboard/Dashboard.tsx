import React, { useEffect, useState } from "react";
import Notes from "./Notes";
import TodaysLessons from "./TodaysLessons";
import Tasks from "./Tasks";
import styled from "styled-components";
import DayService from "../../service/DayService";


const Dashboard: React.FC = () => {

    const [dayToDisplay, setDayToDisplay] = useState([]);

    useEffect(() => {
        DayService.getDayByWeekAndDayNumber(1, 1)
        .then((days) => setDayToDisplay(days));

    }, []);

    type DayType = {
        title: string;
        weekNumber: Number;
        dayNumber: Number;
        course: Object;
        content: Array<ContentType>;
    }

    type ContentType = {
        title: string;
        detail: string;
        day: DayType;
    }
    
    return(<>
        <MainTitle>Welcome, user</MainTitle>
        <DashboardItems>
            <DashboardItem>
            <h3>Todays Lessons</h3>
            {dayToDisplay.map((day: DayType)=>{return <TodaysLessons title={day.title} content={day.content} weekNumber={day.weekNumber} dayNumber = {day.dayNumber} />})}
            </DashboardItem>
            <DashboardItem>
                <Tasks />
            </DashboardItem>
            <DashboardItem>
                <Notes />
            </DashboardItem>
        </DashboardItems>
    </>)
};

export default Dashboard;

const MainTitle = styled.h1`
    text-align: center;
    color: var(--tertiary-color);
    font-family: 'american typewriter', 'montserrat', 'impact';
`

const DashboardItems = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`

const DashboardItem = styled.div`
    padding: 10rem;
`

