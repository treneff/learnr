import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SportsBarIcon from '@mui/icons-material/SportsBar';
import ArticleIcon from '@mui/icons-material/Article';
import CloudIcon from '@mui/icons-material/Cloud';
import WorkIcon from '@mui/icons-material/Work';


const Announcements: React.FC = () => {
    return(<>
    <h2>Announcements</h2>
    <AnnouncementContainer>
            <AnnouncementItem>
                <h4>PDA <WorkIcon /></h4>
                <p>Three new PDA tasks released today</p>
            </AnnouncementItem>
            <AnnouncementItem>
                <h4>Industry Talk <CloudIcon /></h4>
                <p>Industry talk tomorrow @ 4pm</p>
            </AnnouncementItem>
            <AnnouncementItem>
                <h4>Careers Week <ArticleIcon /></h4>
                <p>Remember to prepare your cv's for careers week</p>
            </AnnouncementItem>
            <AnnouncementItem>
                <h4>Chanter <SportsBarIcon /></h4>
                <p>Chanter on Thursday!!!!!!</p>
            </AnnouncementItem>
    </AnnouncementContainer>
    
    </>)
};

export default Announcements;

const AnnouncementItem = styled.a`
    color: var(--tertiary-color);
`
const AnnouncementContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`