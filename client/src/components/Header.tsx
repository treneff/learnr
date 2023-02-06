import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>

                <li>
                    <Link to='/profile'>Profile</Link>
                </li>

                <li>
                    <Link to='/course'>Course</Link>
                </li>

                <li>
                    <Link to='/cohort'>Cohort</Link>
                </li>
                <li>
                    <Link to='/registration'>Registration</Link>
                </li>
                <li>
                    <Link to='/testing'>Firestore Testing</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
