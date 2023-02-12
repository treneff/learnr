import React, { useEffect, useState } from "react";
import Notes from "./Notes";
import Today from "./Today";
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
        content: Array<any>;
    }

    return(<>
        <MainTitle>Welcome, user</MainTitle>
        <DashboardItems>
            <DashboardItem>
            <h2>Todays Lessons</h2>
            {dayToDisplay.map((day: DayType)=>{return <Today dayTitle={day.title} content={day.content} weekNumber={day.weekNumber} dayNumber = {day.dayNumber} />})}
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
    width: 10vw;
`

