import SideMenu from './side-menu/SideMenu';
import styled from 'styled-components';
import colors from '../../GlobalStyles';
import AccountMenu from './account-menu/AccountMenu';

const Header = () => {
    //     contains account menu on the right
    //     logo in the middle
    //     and sidemenu button opener on the left side

    return (
        <HeaderBar>
            <SideMenu></SideMenu>
            <Logo>Learnr</Logo>
            <AccountMenu />
        </HeaderBar>
    );
};

export default Header;

const HeaderBar = styled.header`
    background-color: ${colors.get('tertiaryColor')};
    height: 10vh;
    width: 100%;
`;

const Logo = styled.h1`
    color: var(--background-color);
    text-align: center;
    align-items: center;
    font-size: 3rem;
    font-family: 'american typewriter', 'montserrat', 'impact';
    letter-spacing: 0.5vw;
    text-shadow: 2px 2px var(--primary-color);
    animation: fadeIn 1s;

    @keyframes fadeIn {
        0% {
            opacity: 0;
            font-size: 0rem;
            letter-spacing: 0;
            color: var(--tertiary-color);
        }
        100% {
            opacity: 1;
        }
    }
`;
