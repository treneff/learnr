import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Burger } from './Burger';
import styled from 'styled-components';
import colors from '../../Global';

const SideMenu = () => {

    const [open, setOpen] = useState<boolean>(false);
    const close = () => setOpen(false);

    return (
        <>
                <StyledSideMenu open={open}>
                    <StyledSideLink href='/' onClick={() => close()}>Home</StyledSideLink>
                    <StyledSideLink href='/profile' onClick={() => close()}>Profile</StyledSideLink>
                    <StyledSideLink href='/course' onClick={() => close()}>Course</StyledSideLink>
                    <StyledSideLink href='/cohort' onClick={() => close()}>Cohort</StyledSideLink>
                    <StyledSideLink href='/registration' onClick={() => close()}>Registration</StyledSideLink>
                    <StyledSideLink href='/testing' onClick={() => close()}>Firestore Testing</StyledSideLink>
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
    background-color: ${colors.get("tertiaryColor")};
    z-index: 1;
    padding: 10rem 0;
    flex-direction: column;
    display: ${({open}) => (open ? "flex" : "none")};
    transition: transform 0.3s ease-in-out;
    transform: ${({open}) => (
        open ? "translateX(0)" : "translateX(-100%)")};
`;

const StyledSideLink = styled.a`
    padding: 0 2rem;
    font-size: 2rem;
    color: ${colors.get("backgroundColor")};
    text-decoration: none;

    :hover {
        color: ${colors.get("secondaryColor")};
        cursor: pointer;
    }
`
