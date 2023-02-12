import SideMenu from './side-menu/SideMenu';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AccountMenu from './account-menu/AccountMenu';

const Header = () => {
    //     contains account menu on the right
    //     logo in the middle
    //     and sidemenu button opener on the left side

    return (
        <HeaderBar>
            <HeaderItem>
                <SideMenu/>
            </HeaderItem>
            <HeaderItem>
                <Link to="/"><Logo>Learnr</Logo></Link>
            </HeaderItem>
            <HeaderItem>
                <AccountMenu />
            </HeaderItem>
        </HeaderBar>
    );
};

export default Header;

const HeaderBar = styled.header`
    background-color: var(--tertiary-color);
    height: 10vh;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`;

const HeaderItem = styled.div` 
    padding-left: 15rem;
    
`

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
