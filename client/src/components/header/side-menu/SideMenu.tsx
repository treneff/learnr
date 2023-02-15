import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Burger } from './Burger';
import styled from 'styled-components';

const SideMenu = () => {
    const [open, setOpen] = useState<boolean>(false);
    const close = () => setOpen(false);

    return (
        <>
            <StyledSideMenu open={open}>
                <Link to='/' onClick={() => close()}>
                    <StyledSideLink>Home</StyledSideLink>
                </Link>
                <Link to='/profile' onClick={() => close()}>
                    <StyledSideLink>Profile</StyledSideLink>
                </Link>
                <Link to='/course' onClick={() => close()}>
                    <StyledSideLink>Course</StyledSideLink>
                </Link>
                <Link to='/cohort' onClick={() => close()}>
                    <StyledSideLink>Cohort</StyledSideLink>
                </Link>
            </StyledSideMenu>
            <Burger open={open} setOpen={setOpen} />
        </>
    );
};

export default SideMenu;

const StyledSideMenu = styled.nav<{ open: boolean }>`
    position: fixed;
    z-index:9;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    height: 100vh;
    min-width:content;
    gap: 4rem;
    background-color: var(--tertiary-color);
    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
    @media (max-width:414px){
        width:100%;
    }
`;

const StyledSideLink = styled.span`

    font-size: 3rem;
    color: var(--background-color);
    padding: 0 4rem;

    :hover {
        color: var(--secondary-color);
        cursor: pointer;
    }
`;
