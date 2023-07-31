"use client";
import React, {
  useState,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";

import IUser from "../model/IUser";

type users = {
  users: IUser[];
  setUsers: Dispatch<SetStateAction<IUser[]>>;
};

export const Context = createContext<users>({} as users);

export const UsersContext = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<IUser[]>([]);

  return (
    <Context.Provider value={{ users, setUsers }}>{children}</Context.Provider>
  );
};

export const useUsersContext = () => useContext(Context);
