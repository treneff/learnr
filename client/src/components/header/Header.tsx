import SideMenu from '../SideMenu';
import styled from 'styled-components';

const Header = () => {

    const HeaderMain = styled.header`
    
    `

    
    //     contains account menu on the right
    //     logo in the middle
    //     and sidemenu button opener on the left side
    return (
        <header>
            <SideMenu></SideMenu>
        </header>
    );
};

export default Header;
