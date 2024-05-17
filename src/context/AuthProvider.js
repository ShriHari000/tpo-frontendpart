import React from "react";
import { useState } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState({});
    const [studentData,setStudentData]=useState({});
  
    const login = (userData,stdData) => {
      console.log("helll",stdData)
      // Set the authentication state and user data
      setIsAuthenticated(true);
      setUser(userData);
      setStudentData(stdData);
    };
  
    const logout = () => {
      // Perform logout logic here (e.g., clear user data, token, etc.)
      setIsAuthenticated(false);
      setUser(null);
      setStudentData(null);
    };
  
    const authContextValue = {
      isAuthenticated,
      user,
      studentData,
      setUser,
      setStudentData,
      login,
      logout,
    };
  
    return (
      <AuthContext.Provider value={authContextValue}>
        {children}
      </AuthContext.Provider>
    );
  };