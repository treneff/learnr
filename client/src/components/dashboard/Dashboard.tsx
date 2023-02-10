import React from "react";
import Notes from "./Notes";
import TodaysLessons from "./TodaysLessons";
import Tasks from "./Tasks";
import styled from "styled-components";


const Dashboard: React.FC = () => {
    return(<>
        <MainTitle>Welcome, user</MainTitle>
        <DashboardItems>
            <DashboardItem>
                <TodaysLessons />
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

