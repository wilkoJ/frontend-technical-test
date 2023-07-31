import IUser from "@/app/model/IUser";
import React from "react";
import Modal from "./Modal";
import InputText from "../Inputs/InputText";

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
      <InputText
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setName(e.currentTarget.value);
        }}
        placeholder="Update name"
        name="update"
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
    </Modal>
  );
}

export default UserUpdateModal;
