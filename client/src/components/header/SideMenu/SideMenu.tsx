import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Burger } from './Burger';
import styled from 'styled-components';
import colors from '../../../Global';

const SideMenu = () => {

    const [open, setOpen] = useState<boolean>(false);
    const close = () => setOpen(false);

    return (
        <>
                <StyledSideMenu open={open}>
                    <Link to="/" onClick={() => close()}><StyledSideLink>Home</StyledSideLink></Link>
                    <Link to='/profile' onClick={() => close()}><StyledSideLink>Profile</StyledSideLink></Link>
                    <Link to='/course' onClick={() => close()}><StyledSideLink>Course</StyledSideLink></Link>
                    <Link to='/cohort' onClick={() => close()}><StyledSideLink>Cohort</StyledSideLink></Link>
                    <Link to='/registration' onClick={() => close()}><StyledSideLink>Registration</StyledSideLink></Link>
                    <Link to='/testing' onClick={() => close()}><StyledSideLink>Firestore Testing</StyledSideLink></Link>
                </StyledSideMenu>
                <Burger open={open} setOpen = {setOpen} />
        </>
    );
};

export default SideMenu;

const StyledSideMenu = styled.nav<{open: boolean}>`
    top: 0;
    left: 0;
    height: 100vh;
    width: 20vw;
    position: fixed;
    background-color: var(--tertiary-color);
    z-index: 1;
    padding: 10rem 0;
    flex-direction: column;
    display: ${({open}) => (open ? "flex" : "none")};
    transition: transform 0.3s ease-in-out;
    transform: ${({open}) => (
        open ? "translateX(0)" : "translateX(-100%)")};
`;

const StyledSideLink = styled.span`
    padding: 0 2rem;
    font-size: 2rem;
    color: var(--background-color);
    text-decoration: none;

    :hover {
        color: var(--secondary-color);
        cursor: pointer;
    }
`;
