import React, { createContext, useContext, useState, useEffect } from "react";
import { LoginService } from "../services";

// Crear el contexto de autenticación
const AuthContext = createContext();

// Hook personalizado para usar el contexto
export const useAuth = () => useContext(AuthContext);

// Proveedor de autenticación
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    setUsername(username);

    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }

    setLoading(false);
  }, []);

  const login = async (creadentials) => {
    setLoading(true);
    const result = {
      ok: false,
    }
    try {
      const user = await LoginService.login(creadentials);
      setUsername(user.username);
      localStorage.setItem("token", user.token);
      localStorage.setItem("username", user.username);
      setIsLoggedIn(true);
      result.ok = true;
      result.message = [{field:"auth", message: "Login success"}]
    } catch (err) {
      result.message = [{field:"auth", message: err.message}];
    } finally {
      setLoading(false);
      return result;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setUsername("");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, loading, username }}>
      {children}
    </AuthContext.Provider>
  );
};
