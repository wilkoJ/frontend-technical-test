"use client";
import IUser, { userType } from "@/app/model/IUser";
import React, { useEffect } from "react";
import Modal from "./Modal";
import InputText from "../Inputs/InputText";
import { useUsersContext } from "@/app/store/store";
import { Pencil } from "../assets/Icons";

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
        <Pencil />
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
        <Pencil />
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
