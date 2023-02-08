import React from "react";
import styled from "styled-components";
import colors from "../../Global";

type Props = {
    open: boolean;
    setOpen: (v: boolean) => void;
};

export const Burger = (props: Props) => (
    <StyledBurger
    open={props.open}
    onClick={() => props.setOpen(!props.open)}
    >
        <div />
        <div />
        <div />
    </StyledBurger>
);

const StyledBurger = styled.button<{open : boolean}>`
    position: fixed;
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
    div {
        position: relative;
        width: 2rem;
        height: 0.25rem;
        border-radius: 10px;
        background-color: ${({ open }) => 
            open ? colors.get("backgroundColor") : colors.get("tertiaryColor")};
    }
`