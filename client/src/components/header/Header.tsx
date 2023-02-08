import SideMenu from '../SideMenu/SideMenu';
import styled from 'styled-components';
import colors from '../../Global';

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
        </HeaderBar>
    );
};

export default Header;
