import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { createContext, useContext, useEffect, useRef, useState } from "react";

// Creating a Context allows us to share the data with components at any level of the tree without props.


interface AuthContextProps {
  value: any;
}


interface AuthProviderProps {
  children: React.ReactNode;
  value: any;
}

//Creating a Context called AuthContext

const AuthContext = createContext<AuthContextProps>({ value: {} });

// Provides children of AuthContext with the value of the user's state

export function AuthProvider({ children, value }: AuthProviderProps) {
  return (
    <AuthContext.Provider value={{ value }}>
      {children}
    </AuthContext.Provider>
  );
}

// Access the AuthContext.Provider value

export function useAuthValue() {
  return useContext(AuthContext).value;
}

export function useAuthStatus() {
const [loggedIn, setLoggedIn] = useState(false)
  const [checkingStatus, setCheckingStatus] = useState(true)
  const isMounted = useRef(true)
  useEffect(() => {
    const auth = getAuth()
    // FIX: use the unsubscribe returned from onAuthStateChanged for cleanup
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true)
      }
      setCheckingStatus(false)
    })
    return unsubscribe
  }, [])
  return { loggedIn, checkingStatus }
}
