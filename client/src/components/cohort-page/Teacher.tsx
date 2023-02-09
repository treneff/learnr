import styled from "styled-components"

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
    
    return(
        <>
        <TeacherBox>
            <h3>{firstName} {lastName}</h3>
            <p>{jobTitle}</p>
            <p>Contact: {email}</p>
        </TeacherBox>
        </>
    )
}

export default Teacher;

const TeacherBox = styled.div`
    padding: 5rem;
    border: solid 1px var(--tertiary-color);
    margin: 5px;
`