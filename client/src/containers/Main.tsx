import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Profile from '../components/Profile';
import Course from '../components/course-page/Course';
import Cohort from '../components/cohort-page/Cohort';
import Registration from '../components/Registration';
import FirestoreTest from '../components/FirestoreTest';
import Login from '../components/Login';
import { AuthProvider } from '../AuthContext';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebase';
import EmailVerification from '../components/EmailVerification';
import Dashboard from '../components/dashboard/Dashboard';
import PrivateRoute from '../PrivateRoute';
import styled from 'styled-components';

const Main: React.FC = () => {
    interface User {
        [key: string]: any;
    }

    const [currentUser, setCurrentUser] = React.useState<User | null>(null);
    const [verificationCountdownActive, setVerificationCountdownActive] = useState<boolean>(false);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        });
    }, []);

    return (
        <MainContainer data-testid='main'>
            <AuthProvider
                value={{
                    currentUser,
                    verificationCountdownActive,
                    setVerificationCountdownActive,
                }}>
                <Routes>
                    <Route path='/testing' element={<FirestoreTest />} />
                    <Route path='/verify-email' element={<EmailVerification />} />

                    <Route path='/registration' element={<Registration />} />
                    <Route path='/login' element={<Login />} />

                    <Route path='/profile' element={<PrivateRoute />}>
                        <Route path='/profile' element={<Profile />} />
                    </Route>

                    <Route path='/course' element={<PrivateRoute />}>
                        <Route path='/course' element={<Course />} />
                    </Route>

                    <Route path='/cohort' element={<PrivateRoute />}>
                        <Route path='/cohort' element={<Cohort />} />
                    </Route>

                    <Route path='/' element={<PrivateRoute />}>
                        <Route path='/' element={<Dashboard />} />
                    </Route>
                </Routes>
            </AuthProvider>
        </MainContainer>
    );
};

export default Main;

const MainContainer = styled.main`
    height: 90vh;
    overflow:auto;
`;
