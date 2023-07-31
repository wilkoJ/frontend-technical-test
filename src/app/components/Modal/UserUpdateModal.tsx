import IUser from "@/app/model/IUser";
import React from "react";
import Modal from "./Modal";

type IProps = {
  user: IUser;
  onChange: (newUser: IUser) => void;
};
function UserUpdateModal({ user, onChange }: IProps) {
  const [name, setName] = React.useState(user.name);
  return (
    <Modal
      title={"Change User Name"}
      buttonContent={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
      }
      onChange={() => {
        user.name = name;
        onChange(user);
      }}
    >
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setName(e.currentTarget.value);
        }}
        className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        placeholder="Update name"
        type="text"
        name="update"
      />
    </Modal>
  );
}

export default UserUpdateModal;
