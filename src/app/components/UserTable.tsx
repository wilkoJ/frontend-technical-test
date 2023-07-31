"use client";

import React, { useEffect, useState } from "react";
import Type from "./Type";
import IUser from "../model/IUser";

import { useUsersContext } from "../store/store";
import UserUpdateModal from "./Modal/UserUpdateModal";
import {
  ascendingSortByValue,
  descendingSortByValue,
  filterIncludeString,
  noSort,
} from "../utils";

type IProps = {
  users: IUser[];
  search: string;
  currentPage: number;
  paginationSize: number;
};

type SortObject = {
  type: "email" | "name" | "type";
  index: number;
};

/**
 * Component to display a table of users
 * @param {IUser} users a list of users
 **/
const UserTable = ({ users, search, currentPage, paginationSize }: IProps) => {
  const { setUsers } = useUsersContext();
  const [sortObject, setSortObject] = useState<SortObject>({
    type: "name",
    index: 0,
  });

  const arrayOfSort: ((a: string, b: string) => 1 | -1)[] = [
    (a: string, b: string) => {
      return true ? 1 : -1;
    },
    ascendingSortByValue,
    descendingSortByValue,
  ];
  const setIndex = (type: string) => {
    if (sortObject.index + 1 < arrayOfSort.length && type == sortObject.type)
      return sortObject.index + 1;
    if (sortObject.index === 0 && type != sortObject.type)
      return sortObject.index + 1;
    return 0;
  };
  return (
    <div className="relative overflow-x-auto p-4">
      <table className="sd:w-full md:table-fixed text-sm text-left text-gray-500 dark:text-gray-400 rounded shadow">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 font-light"
              onClick={() => {
                setSortObject({
                  type: "email",
                  index: setIndex("email"),
                });
                console.log(sortObject);
              }}
            >
              Email
            </th>
            <th
              scope="col"
              className="px-6 py-3 font-light"
              onClick={() => {
                setSortObject({
                  type: "name",
                  index: setIndex("name"),
                });
                console.log(sortObject);
              }}
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 font-light"
              onClick={() => {
                setSortObject({
                  type: "type",
                  index: setIndex("type"),
                });
                console.log(sortObject);
              }}
            >
              Type
            </th>
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
            .sort((a, b) => {
              return arrayOfSort[sortObject.index](
                a[sortObject.type],
                b[sortObject.type]
              );
            })
            .map((user: IUser, index: number) => {
              if (
                index > currentPage * paginationSize - 1 &&
                index < currentPage * paginationSize + paginationSize
              )
                return (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {user.email}
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {user.name}
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <Type type={user.type} />
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <UserUpdateModal
                        user={users[index]}
                        onChange={(newUser: IUser) => {
                          users[index] = newUser;
                          setUsers(users);
                        }}
                      />
                    </td>
                  </tr>
                );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
