import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { History } from "history";
import api from "../../services/api";

interface AuthProviderProps {
  children: ReactNode;
}

interface User {}

interface AuthProviderData {
  signIn: (
    userData: User,
    setError: (value: boolean) => void,
    history: History
  ) => void;
  token: string;
  setAuth: Dispatch<SetStateAction<string>>;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const token = localStorage.getItem("token") || "";

  const [auth, setAuth] = useState<string>(token);

  const signIn = (
    userData: User,
    setError: (value: boolean) => void,
    history: History
  ) => {
    api
      .post("/sessions/", userData)
      .then((response) => {
        localStorage.setItem("token", response.data.access);
        setAuth(response.data.access);
        history.push("/dashboard");
      })
      .catch((err) => setError(true));
  };

  return (
    <AuthContext.Provider value={{ token: auth, setAuth, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
