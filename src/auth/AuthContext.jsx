import { createContext, useContext, useState, useEffect } from "react";
import { API } from "../api/ApiContext";

// const tokenKey = "token";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => sessionStorage.getItem("token"));

  //stores token so refresh does not log you out
  // useEffect(() => {
  //   try {
  //     const storedToken = sessionStorage.getItem("tokenKey");
  //     if (storedToken) {
  //       setToken(storedToken);
  //       // navigate("/books");
  //     }
  //   } catch (e) {
  //     console.error("You have not signed up", e);
  //   }
  // }, []);

  useEffect(() => {
    try {
      if (token) {
        sessionStorage.setItem("token", token);
      } else {
        sessionStorage.removeItem("token");
      }
    } catch (e) {
      console.error("Token does not exist", e);
    }
  }, [token]);

  const register = async (credentials) => {
    const response = await fetch(API + "/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const result = await response.json();
    if (!response.ok) throw result;
    setToken(result.token);
  };

  const login = async (credentials) => {
    const response = await fetch(API + "/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const result = await response.json();
    if (!response.ok) throw result;
    setToken(result.token);
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
