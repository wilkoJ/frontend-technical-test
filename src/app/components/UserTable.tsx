"use client";
import React, { useState, useEffect } from "react";

import ColumnCase from "./ColumnCase";
import Type from "./Type";
import IUser from "../model/IUser";
import Modal from "./Modal/Modal";

import { useUsersContext } from "../store/store";
type IProps = {
  users: IUser[];
  search: string;
  currentPage: number;
  paginationSize: number;
};

/**
 * Component to display a table of users
 * @param {IUser} users a list of users
 **/

const UserTable = ({ users, search, currentPage, paginationSize }: IProps) => {
  const { setUsers } = useUsersContext();

  return (
    <table className="md:table-fixed border-collapse  border border-slate-400">
      <thead>
        <tr>
          <th className="">Email </th>
          <th className="">Name</th>
          <th className="">Type</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user: IUser, index: number) => {
          if (
            index > currentPage * paginationSize - 1 &&
            index < currentPage * paginationSize + paginationSize
          )
            return (
              <tr key={index} className="border border-slate-300">
                <td onClick={() => {}}>
                  <ColumnCase value={user.email} />
                </td>
                <td>
                  <ColumnCase value={user.name} />
                </td>
                <td>
                  <Type type={user.type} />
                </td>
                <td>
                  <Modal
                    user={users[index]}
                    onChange={(value: string) => {
                      users[index].name = value;
                      setUsers(users);
                    }}
                  />
                </td>
              </tr>
            );
        })}
      </tbody>
    </table>
  );
};

export default UserTable;
