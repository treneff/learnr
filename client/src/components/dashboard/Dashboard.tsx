import React, { useEffect, useState } from 'react';

import Today from './Today';
import styled from 'styled-components';
import DayService from '../../service/DayService';
import { useAuthValue } from '../../AuthContext';
import StudentService from '../../service/StudentService';
import UsefulLinks from './UsefulLinks';
import Announcements from './Announcements';

const Dashboard: React.FC = () => {
    const [dayToDisplay, setDayToDisplay] = useState([]);
    const { currentUser } = useAuthValue();
    const [user, setUser] = useState<any>();

    useEffect(() => {
        StudentService.getStudentByEmail(currentUser.email).then((profile) => {
            setUser(profile[0]);
        });
    });

    useEffect(() => {
        DayService.getDayByWeekAndDayNumber(1, 1).then((days) => setDayToDisplay(days));
    }, [user]);

    type DayType = {
        title: string;
        weekNumber: Number;
        dayNumber: Number;
        course: Object;
        content: Array<any>;
    };

    return (
        <>
            {user ? (
                <MainTitle>Welcome to your Dashboard, {user.firstName}</MainTitle>
            ) : (
                <MainTitle>Welcome to your Dashboard</MainTitle>
            )}
            <DashboardItems>
                <DashboardItem>
                    <h2>Todays Lessons</h2>
                    {dayToDisplay.map((day: DayType) => {
                        return (
                            <Today
                                dayTitle={day.title}
                                content={day.content}
                                weekNumber={day.weekNumber}
                                dayNumber={day.dayNumber}
                            />
                        );
                    })}
                </DashboardItem>
                <DashboardItem>
                    <Announcements />
                </DashboardItem>
                <DashboardItem>
                    <UsefulLinks />
                </DashboardItem>
            </DashboardItems>
        </>
    );
};

export default Dashboard;

const MainTitle = styled.h1`
    text-align: center;
    color: var(--tertiary-color);
    padding:2rem;
`;

const DashboardItems = styled.section`
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    min-width: 300px;
    align-items: flex-start;
    padding-top:3rem;
    gap:3rem;
    background-color: #f5f3f3;
    @media (max-width: 414px) {
        flex-direction: column;
    }
`;

const DashboardItem = styled.div`
    width: 100%;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    overflow: auto;
`;
