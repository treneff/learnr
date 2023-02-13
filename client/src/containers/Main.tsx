import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
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
import StudentService from "../service/StudentService";

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

  useEffect(() => {
    if (!currentUser) return;
    StudentService.getStudentByEmail(currentUser.email).then((profile) => {
      if (profile && profile.length > 0) {
        setCurrentUser({ ...currentUser, firstName: profile[0].firstName });
      } else {
        console.error("No profile found for this email");
      }
    });
  }, [currentUser]);

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
          <Route
            path="/testing"
            element={
              currentUser &&
              currentUser.emailVerified &&
              currentUser.firstName ? (
                <FirestoreTest />
              ) : (
                <Navigate to="/profile" replace />
              )
            }
          />
          <Route
            path="/verify-email"
            element={
              currentUser &&
              currentUser.emailVerified &&
              currentUser.firstName ? (
                <Navigate to="/" replace />
              ) : (
                <EmailVerification />
              )
            }
          />
          <Route
            path="/burger"
            element={
              currentUser &&
              currentUser.emailVerified &&
              currentUser.firstName ? (
                <SideMenu />
              ) : (
                <Navigate to="/profile" replace />
              )
            }
          />
          <Route
            path="/account-menu"
            element={
              currentUser &&
              currentUser.emailVerified &&
              currentUser.firstName ? (
                <AccountMenu />
              ) : (
                <Navigate to="/profile" replace />
              )
            }
          />
          <Route
            path="/login"
            element={
              currentUser ? (
                !currentUser.emailVerified ? (
                  <Navigate to="/verify-email" replace />
                ) : (
                  <Navigate to="/" replace />
                )
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/registration"
            element={
              currentUser ? (
                !currentUser.emailVerified ? (
                  <Registration />
                ) : (
                  <Navigate to="/" replace />
                )
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/profile"
            element={
              currentUser &&
              currentUser.emailVerified &&
              currentUser.firstName ? (
                <Profile />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/course"
            element={
              currentUser &&
              currentUser.emailVerified &&
              currentUser.firstName ? (
                <Course />
              ) : (
                <Navigate to="/profile" replace />
              )
            }
          />
          <Route
            path="/cohort"
            element={
              currentUser &&
              currentUser.emailVerified &&
              currentUser.firstName ? (
                <Cohort />
              ) : (
                <Navigate to="/profile" replace />
              )
            }
          />
          <Route
            path="/"
            element={
              currentUser &&
              currentUser.emailVerified &&
              currentUser.firstName ? (
                <Dashboard />
              ) : (
                <Navigate to="/profile" replace />
              )
            }
          />
        </Routes>
      </AuthProvider>
    </main>
  );
};

export default Main;
