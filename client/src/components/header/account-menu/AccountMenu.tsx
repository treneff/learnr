import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import styled from 'styled-components';
import DropDown from './AccountDropDown';
import { auth } from '../../../config/firebase';
import { signOut } from 'firebase/auth';

const AccountMenu = () => {
    //if theyre logged in
    //contains profile picture
    //Profile
    //Course
    //Logout

    const [showDropDown, setShowDropDown] = useState<boolean>(false);
    const [selectOption, setSelectOption] = useState<string>('');
    // const options = () => {
    //     return ["Profile", "Course", "Logout"]};

    const toggleDropDown = () => {
        setShowDropDown(!showDropDown);
    };

    const navigate = useNavigate();

    // @param event

    const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
        if (event.currentTarget === event.target) {
            setShowDropDown(false);
        }
    };

    // @param option

    const optionSelection = (option: string): void => {
        setSelectOption(option);
    };

    const logout = async (): Promise<void> => {
        console.log('logout click');
        try {
            await signOut(auth);
            navigate('/login');
        } catch (err) {
            console.error(err);
        }
    };

    //if theyre logged out
    //generic bust picture
    //a menu option to the login/registration screen

    return (
        <AccountMenuStyle>
            <div onClick={(): void => toggleDropDown()}>
                <AccountBoxIcon sx={{fontSize:"2.5rem","&:hover":{cursor:"pointer"}}} />
                {showDropDown && (
                    <DropDown
                        // options={options()}
                        showDropDown={false}
                        toggleDropDown={(): void => toggleDropDown()}
                        optionSelection={optionSelection}
                        logout={logout}
                    />
                )}
            </div>
        </AccountMenuStyle>
    );
};

export default AccountMenu;

const AccountMenuStyle = styled.div`
    color: var(--background-color);
    margin-right:2rem;
    position:relative;
`;

// const ProfileIcon = styled.img``
