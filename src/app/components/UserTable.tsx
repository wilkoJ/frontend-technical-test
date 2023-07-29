"use client";
import React, { useState } from "react";

import ColumnCase from "./ColumnCase";
import Type from "./Type";
import IUser from "../model/IUser";

type IProps = {
  users: IUser[];
};

const UserLine = ({ users }: IProps) => {
  return (
    <table className="md:table-fixed border-collapse  border border-slate-400">
      <thead>
        <tr>
          <th className="">Email</th>
          <th className="">Name</th>
          <th className="">Type</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user: IUser, index: number) => {
          return (
            <tr key={user.id} className="border border-slate-300 ...">
              <td>
                <ColumnCase value={user.email} />
              </td>
              <td>
                <ColumnCase value={user.name} />
              </td>
              <td>
                <Type type={user.type} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default UserLine;
