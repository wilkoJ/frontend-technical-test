import React from "react";
import { userType } from "../model/IUser";

type IProps = {
  type: userType;
};
const Type = ({ type }: IProps) => {
  return (
    <div className="text-center  p-8">
      <p>{type}</p>
    </div>
  );
};

export default Type;
