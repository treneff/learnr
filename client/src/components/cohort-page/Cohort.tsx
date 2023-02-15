import styled from 'styled-components';
import { useEffect, useState } from 'react';
import TeacherService from '../../service/TeacherService';
import StudentService from '../../service/StudentService';
import Teacher from './Teacher';
import Student from './Student';

const Cohort = () => {
    const [allStudents, setAllStudents] = useState([]);
    const [allTeachers, setAllTeachers] = useState([]);

    useEffect(() => {
        StudentService.getStudents().then((students) => setAllStudents(students));
        TeacherService.getTeachers().then((teachers) => setAllTeachers(teachers));
    }, []);

    type TeacherType = {
        firstName: string;
        lastName: string;
        email: string;
        phone: Long;
        dob: string;
        bio: string;
        course: Object;
        jobTitle: string;
    };

    type StudentType = {
        firstName: string;
        lastName: string;
        email: string;
        phone: Long;
        dob: string;
        bio: string;
        course: Object;
    };

    return (
        <section>
            <CohortTitle>Your Cohort</CohortTitle>
            <Subheading>Teachers</Subheading>
            <TeacherContainer>
                {allTeachers.map((teacher: TeacherType) => {
                    return (
                        <Teacher
                            firstName={teacher.firstName}
                            lastName={teacher.lastName}
                            email={teacher.email}
                            phone={teacher.phone}
                            dob={teacher.dob}
                            bio={teacher.bio}
                            course={teacher.course}
                            jobTitle={teacher.jobTitle}
                        />
                    );
                })}
            </TeacherContainer>
            <Subheading>Students</Subheading>
            <StudentContainer>
                {allStudents.map((student: StudentType) => {
                    return (
                        <Student
                            firstName={student.firstName}
                            lastName={student.lastName}
                            email={student.email}
                            phone={student.phone}
                            dob={student.dob}
                            bio={student.bio}
                            course={student.course}
                        />
                    );
                })}
            </StudentContainer>
        </section>
    );
};

export default Cohort;

const CohortTitle = styled.h1`
    text-align:center;
    margin-bottom:2rem;
`
const Subheading = styled.h2`
    text-align: center;
    color: var(--tertiary-color);
`;

const TeacherContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    gap: 2rem;
    flex-wrap: wrap;
    flex-direction: row;
`;
const StudentContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;


