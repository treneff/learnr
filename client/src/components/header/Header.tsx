import SideMenu from './side-menu/SideMenu';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AccountMenu from './account-menu/AccountMenu';

const Header = () => {
    //     contains account menu on the right
    //     logo in the middle
    //     and sidemenu button opener on the left side

    return (
        <HeaderBar data-testid='header'>
            <SideMenu />

            <Logo>
                <Link to='/'>Learnr</Link>
            </Logo>

            <AccountMenu />
        </HeaderBar>
    );
};

export default Header;

const HeaderBar = styled.header`
    background-color: var(--tertiary-color);
    height: 10vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items:center;
`;

const Logo = styled.div`
    color: var(--background-color);
    display: flex;
    justify-content:center;
    align-items:center;
    font-size: 2.5rem;
    font-family: 'american typewriter', 'Roboto', sans-serif;
    letter-spacing: 0.5vw;
    text-shadow: 2px 2px var(--primary-color);
    animation: fadeIn 1s;

    
    @keyframes fadeIn {
        0% {
            opacity: 0;
            color: var(--tertiary-color);
        }
        100% {
            opacity: 1;
        }
    }

    @media (max-width:){

    }
`;
