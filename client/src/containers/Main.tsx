import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
// import Login from "../components/Login"
import Profile from "../components/Profile";
import Course from "../components/course-page/Course";
import Cohort from "../components/cohort-page/Cohort";
import Registration from "../components/Registration";
import FirestoreTest from "../components/FirestoreTest";
import SideMenu from "../components/header/side-menu/SideMenu";
import Login from "../components/Login";
import { AuthProvider } from "../AuthContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import EmailVerification from "../components/EmailVerification";
import AccountMenu from "../components/header/account-menu/AccountMenu";
import Dashboard from "../components/dashboard/Dashboard";
import { Navigate } from "react-router-dom";
import PrivateRoute from "../PrivateRoute";

const Main: React.FC = () => {
  interface User {
    [key: string]: any;
  }

  const [currentUser, setCurrentUser] = React.useState<User | null>(null);
  const [verificationCountdownActive, setVerificationCountdownActive] =
    useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <main>
      <AuthProvider
        value={{
          currentUser,
          verificationCountdownActive,
          setVerificationCountdownActive,
        }}
      >
        <Routes>
          {/* Anyone */}
          <Route path="/testing" element={<FirestoreTest />} />
          <Route path="/verify-email" element={<EmailVerification />} />
          <Route path="/burger" element={<SideMenu />} />
          <Route path="/account-menu" element={<AccountMenu />} />
          <Route
            path="/login"
            element={
              !currentUser ? (
                <Login />
              ) : !currentUser?.emailVerified ? (
                <Profile />
              ) : (
                <Navigate to="/verify-email" replace />
              )
            }
          />
          <Route
            path="/registration"
            element={
              !currentUser?.emailVerified ? (
                <Registration />
              ) : (
                <Navigate to="/profile" replace />
              )
            }
          />
          {/* Verified Users Only */}
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/course"
            element={
              <PrivateRoute>
                <Course />
              </PrivateRoute>
            }
          />
          <Route
            path="/cohort"
            element={
              <PrivateRoute>
                <Cohort />
              </PrivateRoute>
            }
          />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </main>
  );
};

export default Main;
