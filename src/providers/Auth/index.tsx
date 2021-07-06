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

interface User {
  username: string;
  location: string;
  cep: number;
}

interface AuthProviderData {
  signIn: (
    userData: User,
    setError: (value: boolean) => void,
    history: History
  ) => void;
  signUp: (
    userData: User,
    setError: (value: boolean) => void,
    history: History
  ) => void;
  token: string;
  setAuth: Dispatch<SetStateAction<string>>;
  updateUserInfo: (data: User) => void;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const token = localStorage.getItem("token") || "";

  const [auth, setAuth] = useState<string>(token);
  const [user, setUser] = useState({});

  const signIn = (
    userData: User,
    setError: (value: boolean) => void,
    history: History
  ) => {
    api
      .post("/login", userData)
      .then((response) => {
        localStorage.setItem("token", response.data.access);
        setAuth(response.data.access);
        console.log(response.data);
        history.push("/dashboard");
      })
      .catch((err) => setError(true));
  };

  const signUp = (
    userData: User,
    setError: (value: boolean) => void,
    history: History
  ) => {
    api
      .post("/users", userData)
      .then((response) => {
        history.push("/login");
        console.log(response);
      })
      .catch((err) => setError(true));
  };

  const updateUserInfo = async (data: User) => {
    const response = await api.patch("/users");
    setUser({ ...user, data });
    console.log(response);
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
