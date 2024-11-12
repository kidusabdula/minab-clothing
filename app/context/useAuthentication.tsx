import { createContext, useEffect, useState } from "react";
import { UserProfile } from "../models/UserModel";


import { useRouter } from "next/router";
import { loginAPI, registerAPI } from "../services/AuthentciationService";
import { toast } from "react-toastify";
import React from "react";
import axios from "axios";

type UserContextType = {
  user: UserProfile | null;
  token: string | null;
  registerUser: (email: string, username: string, password: string) => void;
  loginUser: (username: string, password: string) => void;
  logout: () => void;
  isLoggedIn: () => boolean;
};

type Props = { children: React.ReactNode };

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: Props) => {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    if (user && token) {
      setUser(JSON.parse(user));
      setToken(token);
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    }
    setIsReady(true);
  }, []);

  const registerUser = async (
    email: string,
    username: string,
    password: string
  ) => {
    try {
      const res = await registerAPI(email, username, password);
      if (res?.data.token && res?.data.userName && res?.data.email) {
        localStorage.setItem("user", JSON.stringify({
          userName: res.data.userName,
          email: res.data.email,
        }));
        setToken(res.data.token);
        setUser({
          userName: res.data.userName,
          email: res.data.email,
        });
        toast.success("Registered Successfully");
        router.push("/login");
      }
    } catch (e) {
      toast.warning("Server error occurred");
    }
  };

  const loginUser = async (username: string, password: string) => {
    try {
      const res = await loginAPI(username, password);
      if (res?.data.token && user) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(user));
        setToken(res.data.token);
        setUser(user);
        toast.success("Login Success!");
        router.push("/");
      }
    } catch (e) {
      toast.warning("Server error occurred");
    }
  };

  const isLoggedIn = () => {
    return !!user;
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setToken(null);
    router.push("/");
  };

  return (
    <UserContext.Provider
      value={{ loginUser, user, token, logout, isLoggedIn, registerUser }}
    >
      {isReady ? children : null}
    </UserContext.Provider>
  );
};

export const useAuth = () => React.useContext(UserContext);
