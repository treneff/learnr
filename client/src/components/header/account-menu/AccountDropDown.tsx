import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, redirect, useNavigate } from 'react-router-dom';

type DropDownProps = {
    // options: string[];
    showDropDown: boolean;
    toggleDropDown: Function;
    optionSelection: Function;
    logout: any;
};

const DropDown = ({
    // options,
    optionSelection,
    logout,
}: DropDownProps) => {
    const navigate = useNavigate();

    const [showDropDown, setShowDropDown] = useState<boolean>(false);

    useEffect(() => {
        setShowDropDown(showDropDown);
    }, [showDropDown]);

    return (
        <DropDownBox>
            <DropDownItem
                onClick={() => {
                    navigate('/profile');
                }}>
                Profile
            </DropDownItem>
            <DropDownItem
                onClick={() => {
                    navigate('/course');
                }}>
                Course
            </DropDownItem>
            <DropDownItem onClick={logout}>Logout</DropDownItem>
        </DropDownBox>
    );
};

export default DropDown;

const DropDownBox = styled.div`
    position: absolute;
    top:100%;
    left: -200%;
    border:3px solid var(--tertiary-color);
    background: #fff;
    color: var(--tertiary-color);
    text-align: left;
    border-radius: 0.25rem;
    text-align: center;
`;

const DropDownItem = styled.p`
    color: var(--tertiary-color);
    padding:0 2rem;
    text-decoration: none;
    text-align: left;
    &:hover{
        cursor:pointer;
        text-decoration:underline;
    }
`;
