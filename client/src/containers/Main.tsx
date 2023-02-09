
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
// import Login from "../components/Login"
import Profile from "../components/Profile";
import Course from "../components/course-page/Course";
import Cohort from "../components/Cohort";
import Registration from "../components/Registration";
import FirestoreTest from "../components/FirestoreTest";
import SideMenu from "../components/header/side-menu/SideMenu";
import Login from "../components/Login";
import { AuthProvider } from "../AuthContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";

const Main: React.FC = () => {
    
  interface User {
    [key: string]: any;
  }

  const [currentUser, setCurrentUser] = React.useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <main>
      <AuthProvider value={{ currentUser }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/burger" element={<SideMenu />} />
          <Route path="/testing" element={<FirestoreTest />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/course" element={<Course />} />
          <Route path="/cohort" element={<Cohort />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </AuthProvider>
    </main>
  );
};

export default Main;
