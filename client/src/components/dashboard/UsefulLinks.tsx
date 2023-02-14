import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const UsefulLinks: React.FC = () => {
    return(<>
    <h2>Links</h2>
    <LinkList>
            <LinkItem href="https://jobs.codeclan.com/" target="_blank">Jobs Forum</LinkItem>
            <LinkItem href="https://www.codeclan.com" target="_blank">CodeClan Website</LinkItem>
            <LinkItem href="https://github.com/codeclan" target="_blank">GitHub</LinkItem>
            <LinkItem href="https://docs.google.com/forms/d/e/1FAIpQLSdpyp_p2OxWK50S7A9L-ff4gMssrZvi3lw7db1aAAmKFwUzew/viewform" target="_blank">Homework Submission</LinkItem>
    </LinkList>
    
    </>)
};

export default UsefulLinks;

const LinkItem = styled.a`
    color: var(--tertiary-color);
    padding-top: 1rem;
    padding-bottom: 1rem;
    :hover{
        text-decoration: underline;
        color: var(--secondary-color);
    }
`
const LinkList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`