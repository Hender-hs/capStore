import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const token = localStorage.getItem("token") || "";

  const [auth, setAuth] = useState(token);
  const [user, setUser] = useState("");

  const history = useHistory();

  const signIn = (userData, setError, history) => {
    console.log(userData);
    api
      .post("/login", userData)
      .then((response) => {
        localStorage.setItem("token", response.data.accessToken);
        setAuth(response.data.access);
        history.push("/home");
      })
      .catch((_) => setError(true));
  };

  const signUp = (userData, setError, history) => {
    api
      .post("/users", userData)
      .then((_) => {
        history.push("/login");
      })
      .catch((_) => setError(true));
  };

  const logout = () => {
    localStorage.clear();
    setAuth("");
    history.push("/login");
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
      value={{
        token: auth,
        setAuth,
        signIn,
        signUp,
        logout,
        updateUserInfo,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
