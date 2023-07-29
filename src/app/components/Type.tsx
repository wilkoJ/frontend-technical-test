import React from "react";
import { userType } from "../model/IUser";

type IProps = {
  type: userType;
};

/**
 * Component to display the type of user
 * @param {userType} type the type of user
 **/

const Type = ({ type }: IProps) => {
  return (
    <div className="text-center  p-8">
      <p>{type}</p>
    </div>
  );
};

export default Type;
