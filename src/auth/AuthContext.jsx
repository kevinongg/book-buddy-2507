import { createContext, useContext, useState } from "react";
import { API } from "../api/ApiContext";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState();

  const register = async (credentials) => {
    const response = await fetch(API + "/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const data = await response.json();
    if (!response.ok) throw data;
    setToken(data.token);
  };

  const login = async (credentials) => {
    const response = await fetch(API + "/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "applications/json",
      },
      body: JSON.stringify(credentials),
    });
    const data = await response.json();
    if (!response.ok) throw data;
    setToken(data.token);
  };

  const logout = () => {
    setToken(null);
  };

  const value = { token, register, login, logout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw Error("useAuth must be used within AuthProvider");
  return context;
};
