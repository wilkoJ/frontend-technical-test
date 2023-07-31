"use client";
import IUser, { userType } from "@/app/model/IUser";
import React, { useEffect } from "react";
import Modal from "./Modal";
import InputText from "../Inputs/InputText";
import { useUsersContext } from "@/app/store/store";

function UserAddModal() {
  const { users, setUsers } = useUsersContext();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [type, setType] = React.useState<userType>("member");
  const [newUser, setNewUser] = React.useState<IUser>({
    email: email,
    name: name,
    id: 0,
    type: type,
  });
  return (
    <Modal
      title={"add user"}
      buttonContent={"add user"}
      onChange={() => {
        setUsers([...users, newUser]);
        console.log(newUser);
      }}
    >
      <InputText
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setName(e.currentTarget.value);
          setNewUser({
            email: email,
            name: name,
            id: users[users.length - 1].id + 1,
            type: type,
          });
        }}
        placeholder="Enter name"
        name="Name"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="h-5 w-5 fill-slate-300"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
          />
        </svg>
      </InputText>
      <InputText
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setEmail(e.currentTarget.value);
          setNewUser({
            email: email,
            name: name,
            id: users[users.length - 1].id + 1,
            type: type,
          });
        }}
        placeholder="Enter email"
        name="Email"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="h-5 w-5 fill-slate-300"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
          />
        </svg>
      </InputText>
      <select
        onChange={(e) => {
          setType(e.currentTarget.value as userType);
          setNewUser({
            email: email,
            name: name,
            id: users[users.length - 1].id + 1,
            type: type,
          });
        }}
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="member">member</option>
        <option value="admin">admin</option>
        <option value="staff">staff</option>
      </select>
    </Modal>
  );
}

export default UserAddModal;
