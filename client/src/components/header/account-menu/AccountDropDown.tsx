import React, {useEffect, useState} from 'react';
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
    optionSelection, logout,
}: DropDownProps) => {
    const navigate = useNavigate();

    const [showDropDown, setShowDropDown] = useState<boolean>(false);

    const onClickHandler = (url: string): void => {
        optionSelection(url);   
    };

    useEffect(() => {
        setShowDropDown(showDropDown);
    }, [showDropDown]);


    return(
        <>
            <DropDownBox>
                            <DropDownItem onClick={() => {navigate("/profile")}}>Profile</DropDownItem>
                            <DropDownItem onClick={() => {navigate("/course")}}>Course</DropDownItem>
                            <DropDownItem onClick={logout}>Logout</DropDownItem>
            </DropDownBox>
        </>

    )
};

export default DropDown;

const DropDownBox = styled.div`  
  position: absolute;
  top: 38px;
  left: -1px;
  border: 1px solid rgb(197, 197, 197);
  background: #fff;
  padding: 0;
  color: var(--tertiary-color);
  text-align: left;
  border-radius: 0.25rem;
  text-align: center;
  align-items: flex-end;
  margin-right: 0;
  padding-right: 0;
`

const DropDownItem = styled.p`
  margin: 0;
  padding: 0.375rem 0.88rem;
  border-bottom: 1px solid rgb(235, 235, 235);
  color: var(--tertiary-color);
  text-decoration: none;
  text-align: left;
  width: 6vw;
  :hover{
    background-color: var(--tertiary-color);
    color: var(--background-color);
  }
`