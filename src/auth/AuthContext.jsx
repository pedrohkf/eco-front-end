import React, { Children, createContext, useEffect, useState } from "react";
import { validateToken } from "../api/auth";
import { useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const checkToken = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.log("sem token");
      setLoading(false);
      return;
    }

    try {
      const response = await validateToken();
      console.log("USER RETURN", response);
      setUser(response.data.email);
    } catch (error) {
      console.error("token inválido", error);
      localStorage.removeItem("token");
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  const login = (token, userData) => {
    localStorage.setItem("token", token);
    setUser(userData);
    console.log("LOGIN TOKEN: ", user);
  };

  return (
    <AuthContext.Provider value={{ user, login, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
