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
import { User } from "../../types/user";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthProviderData {
  signIn: (
    userData: User,
    setError: Dispatch<SetStateAction<boolean>>,
    history: History
  ) => void;
  signUp: (
    userData: User,
    setError: Dispatch<SetStateAction<boolean>>,
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
  const [user, setUser] = useState({} as User);

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

  const updateUserInfo = (data: User) => {
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
