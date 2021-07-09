import { createContext, useContext, useState } from "react";
import api from "../../services/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const token = localStorage.getItem("token") || "";

  const [auth, setAuth] = useState(token);
  const [user, setUser] = useState();

  const signIn = (userData, setError, history) => {
    api
      .post("/login", userData)
      .then((response) => {
        localStorage.setItem("token", response.data.accessToken);
        setAuth(response.data.access);
        console.log(response.data);
        history.push("/dashboard");
      })
      .catch((err) => setError(true));
  };

  const signUp = (userData, setError, history) => {
    api
      .post("/users", userData)
      .then((response) => {
        history.push("/login");
        console.log(response);
      })
      .catch((err) => setError(true));
  };

  const updateUserInfo = (data) => {
    api.patch("/users", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const newUser = { ...user, data };

    setUser(newUser);
  };

  return (
    <AuthContext.Provider
      value={{ token: auth, setAuth, signIn, signUp, updateUserInfo }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
