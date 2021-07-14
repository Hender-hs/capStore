import { createContext, useContext, useState } from "react";
import api from "../../services/api";
import { toastSuccess, toastError } from "../../utils/toast";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const token = localStorage.getItem("@capstore:token") || "";

  const [auth, setAuth] = useState(token);
  const [user, setUser] = useState("");

  const signIn = (userData, setError, history) => {
    console.log(userData);
    api
      .post("/login", userData)
      .then((response) => {
        localStorage.setItem("@capstore:token", response.data.accessToken);
        setAuth(response.data.access);
        history.push("/dashboard");
        toastSuccess("Usuário logado com sucesso");
      })
      .catch((_) => {
        setError(true);
        toastError("Erro ao tentar logar, verifique suas credenciais");
      });
  };

  const signUp = (userData, setError, history) => {
    api
      .post("/users", userData)
      .then((_) => {
        history.push("/login");
      })
      .catch((_) => setError(true));
  };

  const logout = (history) => {
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
