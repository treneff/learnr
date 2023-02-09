import styled from "styled-components";

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
    return(
        <>
        <StudentBox>
            <h3>{firstName} {lastName}</h3>
            <p>{bio}</p>
        </StudentBox>
        </>
    )
}

export default Student;

const StudentBox = styled.div`
    padding: 5rem;
    border: solid 1px var(--tertiary-color);
    margin: 5px;
`