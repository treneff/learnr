import { useState } from 'react';
import styled from 'styled-components';
import UserViewPopUp from './UserViewPopUp';

interface StudentProps {
    firstName: string;
    lastName: string;
    email: string;
    phone: Long;
    dob: string;
    bio: string;
    course: Object;
}

const Student: React.FC<StudentProps> = ({ firstName, lastName, bio, email }) => {
    const [open, setOpen] = useState(false);

    const togglePopUp = () => {
        setOpen(!open);
    };

    return (
        <StudentBox onClick={togglePopUp}>
            <h3>
                {firstName} {lastName}
            </h3>
            {open && (
                <UserViewPopUp
                    content={
                        <div>
                            <h4>
                                {firstName} {lastName}
                            </h4>
                            <p>
                                <b>About me</b>
                            </p>
                            {bio}
                            <p>
                                <b>Contact</b>
                            </p>
                            {email}
                        </div>
                    }
                    handleClose={togglePopUp}
                />
            )}
        </StudentBox>
    );
};

export default Student;

const StudentBox = styled.div`
    border: solid 3px var(--tertiary-color);
    border-radius:5px;
    text-align: center;
    padding: 2rem 0 2rem 0;
    margin: 2rem 0 2rem 0;
    min-width: 300px;

    &:hover{
        background-color: var(--tertiary-color);
        color:var(--background-color);
        cursor:pointer;
    }
`;
