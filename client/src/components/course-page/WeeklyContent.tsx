import styled from 'styled-components';
import DayService from '../../service/DayService';
import { useEffect, useState } from 'react';

interface WeekProps {
    isOpen: boolean;
    weekToDisplay: any;
}

const WeeklyContent: React.FC<WeekProps> = ({ isOpen, weekToDisplay }) => {
    const [weeklyContent, setWeeklyContent] = useState([]);

    useEffect(() => {
        DayService.getDaysByWeek(weekToDisplay).then((days) => {setWeeklyContent(days);console.log(days)});
    }, [weekToDisplay]);

type DailyContentType = {
    id: number;
    title: string;
}
    const dailyNodes = weeklyContent.map((dailyContent: DailyContentType, index: number) => {
        return <li key={index}> {dailyContent.title}</li>;
    });

    return (
        <Content style={{ maxHeight: isOpen ? '100%' : 0 }}>
            {weeklyContent?dailyNodes:null}
        </Content>
    );
};

export default WeeklyContent;

const Content = styled.ul`
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
`;
