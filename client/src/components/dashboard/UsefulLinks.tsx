import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const UsefulLinks: React.FC = () => {
    return(<>
    <h2>Links</h2>
    <LinkList>
        <LinkListItem>
            <LinkItem href="https://jobs.codeclan.com/" target="_blank">Jobs Forum</LinkItem>
        </LinkListItem>
        <LinkListItem>
            <LinkItem href="https://www.codeclan.com" target="_blank">CodeClan Website</LinkItem>
        </LinkListItem>
        <LinkListItem>
            <LinkItem href="https://www.github.com" target="_blank">GitHub</LinkItem>
        </LinkListItem>
    </LinkList>
    
    </>)
};

export default UsefulLinks;

const LinkItem = styled.a`
    color: var(--tertiary-color);
    font-size: medium;
    :hover{
        text-decoration: underline;
        color: var(--secondary-color);
    }
`

const LinkListItem = styled.div`
    padding-top: 1rem;
    padding-bottom: 1rem;
`

const LinkList = styled.div`
    display: flex;
    flex-direction: column;
`