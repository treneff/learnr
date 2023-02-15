import { useState } from "react";
import styled from "styled-components";
import UserViewPopUp from "./UserViewPopUp";

interface TeacherProps {
    firstName: string,
    lastName: string,
    email: string,
    phone: Long,
    dob: string,
    bio: string,
    course: Object,
    jobTitle: string,
}


const Teacher: React.FC<TeacherProps> = ({firstName, lastName, email, jobTitle, bio}) => {

    const [open, setOpen] = useState(false);

    const togglePopUp = () => {
        setOpen(!open);
    }
    
    return(
        <>
        <TeacherBox onClick={togglePopUp}>
            <h3>{firstName} {lastName}</h3>
            <p>{jobTitle}</p>
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
        </TeacherBox>
        </>
    )
}

export default Teacher;

const TeacherBox = styled.div`
    border: solid 3px var(--secondary-color);
    border-radius:5px;
    text-align: center;
    padding:2rem 0 2rem 0;
    margin:2rem 0 2rem 0;
    min-width:300px;

    &:hover{
        background-color: var(--secondary-color);
        color:var(--text-color);
        cursor:pointer;
    }
`