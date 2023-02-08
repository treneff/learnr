import SideMenu from './sideMenu/SideMenu';
import styled from 'styled-components';
import colors from '../../Global';
import AccountMenu from './accountMenu/AccountMenu';

const Header = () => {
    //     contains account menu on the right
    //     logo in the middle
    //     and sidemenu button opener on the left side

    const HeaderBar = styled.header`
        background-color: ${colors.get('tertiaryColor')};
        height: 10vh;
        width:100%;
    `;

    return (
        <HeaderBar>
            <SideMenu></SideMenu>
            <Logo>Learnr</Logo>
            <AccountMenu/>
        </HeaderBar>
    );
};

export default Header;

const Logo = styled.h1`
    color: ${colors.get("backgroundColor")};
    text-align: center;
    padding-top: 2vh;

`
