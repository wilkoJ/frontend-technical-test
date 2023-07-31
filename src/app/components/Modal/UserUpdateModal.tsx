import IUser from "@/app/model/IUser";
import React from "react";
import Modal from "./Modal";
import InputText from "../Inputs/InputText";
import { Dot, Pencil } from "../assets/Icons";

type IProps = {
  user: IUser;
  onChange: (newUser: IUser) => void;
};
function UserUpdateModal({ user, onChange }: IProps) {
  const [name, setName] = React.useState(user.name);
  return (
    <Modal
      title={"Change User Name"}
      buttonContent={<Dot />}
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
        <Pencil />
      </InputText>
    </Modal>
  );
}

export default UserUpdateModal;
