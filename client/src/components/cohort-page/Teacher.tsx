import { useState } from "react";
import styled from "styled-components";
import UserViewPopUp from "./UserViewPopUp";

interface TeacherProps {
    firstName: string,
    lastName: string,
    email: string,
    phone: Long,
    dob: string,
    course: Object,
    jobTitle: string,
}


const Teacher: React.FC<TeacherProps> = ({firstName, lastName, email, jobTitle}) => {

    const [open, setOpen] = useState(false);

    const togglePopUp = () => {
        setOpen(!open);
    }
    
    return(
        <>
        <TeacherBox>
            <h3>{firstName} {lastName}</h3>
            <p>{jobTitle}</p>
            <p>Contact: {email}</p>
            <PopUpButton onClick={togglePopUp}>
                View Profile
            </PopUpButton>
                {open && (
                    <UserViewPopUp content={
                        <p>TEST. This will be more profile information.</p>
                    } handleClose={togglePopUp} />
                    )}
        </TeacherBox>
        </>
    )
}

export default Teacher;

const TeacherBox = styled.div`
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