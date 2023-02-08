import React from 'react';
import styled from 'styled-components';
import colors from '../../../Global';

type Props = {
    open: boolean;
    setOpen: (v: boolean) => void;
};

export const Burger = (props: Props) => (
    <StyledBurger open={props.open} onClick={() => props.setOpen(!props.open)}>
        <div />
        <div />
        <div />
    </StyledBurger>
);

const StyledBurger = styled.button<{ open: boolean }>`
    position: absolute;
    left: 3vw;
    top: 3vw;
    width: 2rem;
    height: 2rem;
    padding: 0;
    background: transparent;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: none;
    cursor: pointer;
    outline: none;
    z-index: 1;
    left: ${({ open }) => (open ? '17vw' : '3vw')};

    div {
        position: relative;
        width: 2rem;
        height: 0.25rem;
        border-radius: 10px;
        background-color: var(--background-color);

        transition: all 0.3s linear;
        transform-origin: 1px;

        :first-child {
            transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
        }
        :nth-child(2) {
            opacity: ${({ open }) => (open ? '0' : '1')};
            transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
        }
        :nth-child(3) {
            transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
        }
    }
`;
