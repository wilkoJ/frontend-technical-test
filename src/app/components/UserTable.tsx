"use client";
import React, { useState, useEffect } from "react";

import { filterIncludeString } from "../utils";
import ColumnCase from "./ColumnCase";
import Type from "./Type";
import IUser from "../model/IUser";

type IProps = {
  users: IUser[];
  search: string;
};

/**
 * Component to display a table of users
 * @param {IUser} users a list of users
 **/

const UserTable = ({ users, search }: IProps) => {
  useEffect(() => {
    return () => {};
  }, [search]);

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
        {users
          .filter((user) => {
            return filterIncludeString(
              user.name.toLocaleLowerCase(),
              search.toLocaleLowerCase()
            );
          })
          .map((user: IUser, index: number) => {
            return (
              <tr key={index} className="border border-slate-300 ...">
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

export default UserTable;
