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
    <div className={`text-center md:p-4 `}>
      <p className={` text-xs font-medium mr-2 px-2.5 py-0.5 rounded ${type}`}>
        {type}
      </p>
    </div>
  );
};

export default Type;
