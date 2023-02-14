import React, { useEffect, useState } from "react";
import Notes from "./Notes";
import Today from "./Today";
import Tasks from "./Tasks";
import styled from "styled-components";
import DayService from "../../service/DayService";
import { useAuthValue } from "../../AuthContext";
import StudentService from "../../service/StudentService";
import CompletionsService from "../../service/CompletionService";
import UsefulLinks from "./UsefulLinks";


const Dashboard: React.FC = () => {

    const [dayToDisplay, setDayToDisplay] = useState([]);
    const { currentUser } = useAuthValue();
    const [user, setUser] = useState<any>();

    useEffect(() => {
        StudentService.getStudentByEmail(currentUser.email).then((profile) => {
            setUser(profile[0]);
        });
    }, []);

    useEffect(() => {
        DayService.getDayByWeekAndDayNumber(1, 1)
        .then((days) => setDayToDisplay(days));
    }, [user]);

    

    type DayType = {
        title: string;
        weekNumber: Number;
        dayNumber: Number;
        course: Object;
        content: Array<any>;
    }

    return(<>

    {user ? <MainTitle>Welcome, {user.firstName}</MainTitle> : <MainTitle>Welcome</MainTitle>}
        <DashboardItems>
            <DashboardItem>
            <h2>Todays Lessons</h2>
            {dayToDisplay.map((day: DayType)=>{return <Today dayTitle={day.title} content={day.content} weekNumber={day.weekNumber} dayNumber = {day.dayNumber} />})}
            </DashboardItem>
            <DashboardItem>
            {dayToDisplay.map((day: DayType)=>{return <Tasks content={day.content} userID={user.id} />})}
            </DashboardItem>
            <DashboardItem>
                <UsefulLinks />
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
    padding: 3rem;
    width: 10vw;
    width: 25vw;
    display: flex;
    flex-direction: column;
    justify-content: left;
    background-color: #f5f3f3;
    overflow: auto;
    margin: 2rem;
`

