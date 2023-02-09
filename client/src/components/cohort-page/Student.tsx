import { useState } from "react";
import styled from "styled-components";
import UserViewPopUp from "./UserViewPopUp";

interface StudentProps {
    firstName: string,
    lastName: string,
    email: string,
    phone: Long,
    dob: string,
    bio: string,
    course: Object,
}

const Student: React.FC<StudentProps> = ({firstName, lastName, bio}) => {

    const [open, setOpen] = useState(false);

    const togglePopUp = () => {
        setOpen(!open);
    }
    
    return(
        <>
        <StudentBox>
            <h3>{firstName} {lastName}</h3>
            <p>{bio}</p>
            <PopUpButton onClick={togglePopUp}>
                View Profile
            </PopUpButton>
                {open && (
                    <UserViewPopUp content={
                        <p>TEST. This will be more profile information.</p>
                    } handleClose={togglePopUp} />
                    )}
        </StudentBox>
        </>
    )
}

export default Student;

const StudentBox = styled.div`
    padding: 5rem;
    border: solid 3px var(--tertiary-color);
    margin: 5px;
    :hover{
        border: solid 3px var(--secondary-color);
        background-color: var(--tertiary-color);
        color: var(--background-color);
    }
`

const PopUpButton = styled.button`
    opacity: ${open => open? 1: 0};
    z-index: 1;
`