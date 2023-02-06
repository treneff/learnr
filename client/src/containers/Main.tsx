import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from "../components/Login"
import Profile from '../components/Profile';
import Course from '../components/Course';
import Cohort from '../components/Cohort';
import Registration from '../components/Registration'
import FirestoreTest from '../components/FirestoreTest';
const Main: React.FC = () => {
    return (
        <section>
            <Routes>
                <Route path='/' element={<Login/>} />
                <Route path='/testing'  element={<FirestoreTest />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/course' element={<Course />} />
                <Route path='/cohort' element={<Cohort />} />
                <Route path='/registration' element={<Registration />} />
            </Routes>
        </section>
    );
};

export default Main;
