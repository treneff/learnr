import React, { createContext, useContext } from "react";

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
