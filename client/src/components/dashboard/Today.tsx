import React from 'react';
import TodaysContent from './TodaysContent';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface DayProps {
    dayTitle: string;
    weekNumber: Number;
    dayNumber: Number;
    content: Array<ContentType>;
}

type ContentType = {
    title: string;
    detail: string;
    day: DayType;
};

type DayType = {
    dayTitle: string;
    weekNumber: Number;
    dayNumber: Number;
    course: Object;
    content: Array<ContentType>;
};

const Today: React.FC<DayProps> = ({ dayTitle, content, weekNumber, dayNumber }) => {
    // Need to pull in a day to display through day service fetch on page load

    return (
        <>
            <Link to='/course'>
                <DayTitle>
                    <b>{dayTitle}</b>
                </DayTitle>
            </Link>
            {content.map((content: ContentType) => {
                return <TodaysContent title={content.title} detail={content.detail} />;
            })}
        </>
    );
};

export default Today;

const DayTitle = styled.h3`
    text-decoration: none;
    color: var(--text-color);
    :hover {
        text-decoration: underline;
        color: var(--secondary-color);
    }
`;
