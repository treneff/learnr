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

const Student: React.FC<StudentProps> = ({firstName, lastName, bio, email}) => {

    const [open, setOpen] = useState(false);

    const togglePopUp = () => {
        setOpen(!open);
    }
    
    return(
        <>
        <StudentBox>
            <h3>{firstName} {lastName}</h3>
            <p>photo</p>
            <PopUpButton onClick={togglePopUp}>
                View Profile
            </PopUpButton>
                {open && (
                    <UserViewPopUp content={
                        <div>
                            <h4>{firstName} {lastName}</h4>
                            <p><b>About me</b></p>
                                {bio}
                            <p><b>Contact</b></p>
                                {email}
                        </div>
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
    width: 18vw;
    text-align: center;
    padding: 4rem;
    margin: 2rem;
`

const PopUpButton = styled.button`
    opacity: ${open => open? 1: 0};
    z-index: 1;
`