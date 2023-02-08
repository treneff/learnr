import React, { useState } from "react";
import styled from "styled-components";
import colors from "../../Global";

const AccountMenu = () => {

    //if theyre logged in
    //contains profile picture
    //Profile
    //Course
    //Logout

    const [showDropDown, setShowDropDown] = useState<boolean>(false);
    const [selectOption, setSelectOption] = useState<string>("");
    const options = () => {
        return ["Profile", "Course", "Logout"];
    }

    const toggleDropDown = () => {
        setShowDropDown(!showDropDown);
    };


        // @param event

    const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
        if (event.currentTarget === event.target) {
            setShowDropDown(false);
        }
    };

        // @param option 
    
    const optionSelection = (option: string) : void => {
        setSelectOption(option);
    }



    //if theyre logged out
    //generic bust picture
    //a menu option to the login/registration screen

    return (
    <div>
        <AccountMenuStyle>
            Hello This is the Account Menu
        </AccountMenuStyle>
        <button 
        className={showDropDown ? "active" : undefined}
        onClick={(): void => toggleDropDown()}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void => dismissHandler(e)}
        >


        </button>
    </div>
)};

export default AccountMenu;

const AccountMenuStyle = styled.div`
    text-align: right;
    color: ${colors.get("backgroundColor")};
    font-size: 1.2rem;

`


