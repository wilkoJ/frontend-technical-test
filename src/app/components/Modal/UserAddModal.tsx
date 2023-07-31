import IUser, { userType } from "@/app/model/IUser";
import React from "react";
import Modal from "./Modal";

function UserAddModal() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [type, setType] = React.useState<userType>("");
  const [newUser, setNewUser] = React.useState<IUser>({
    email: email,
    name: name,
    id: 0,
    type: type,
  });
  return (
    <Modal title={"add user"} buttonContent={"add user"} onChange={() => {}}>
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setName(e.currentTarget.value);
        }}
        className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        placeholder="Enter name"
        type="text"
        name="Name"
      />
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setEmail(e.currentTarget.value);
        }}
        className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        placeholder="Enter email"
        type="text"
        name="Email"
      />
      <select
        onChange={(e) => {
          setType(e.currentTarget.value as userType);
        }}
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>member</option>
        <option value="admin">admin</option>
        <option value="staff">staff</option>
      </select>
    </Modal>
  );
}

export default UserAddModal;
