import React from 'react';
import styled from 'styled-components';

const DailyContent = () => {
    return (
        <DailyList>
            <ListItem>Content of the lesson</ListItem>
            <ListItem>Lab</ListItem>
            <ListItem>Homework</ListItem>
        </DailyList>
    );
};

export default DailyContent;


const DailyList = styled.ul`
    width:40vw;
    display:flex;
    flex-direction:column;
    justify-content:left;
    background-color:#F5F3F3;
    padding:2rem;
`

const ListItem = styled.li`
    background-color: var(--secondary-color);
    display:flex;
    justify-content:space-between;
    margin: 5px 0px;
    padding: 2rem;
    border-radius: 5px;
    color:var(--text-color); 
`;