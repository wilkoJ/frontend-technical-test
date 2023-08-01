"use client";

import React, { useEffect, useState } from "react";
import Type from "./Type";
import IUser from "../model/IUser";

import { useUsersContext } from "../store/store";
import { AscendantSort, DescendantSort, DefaultSort } from "./assets/Icons";
import UserUpdateModal from "./Modal/UserUpdateModal";
import { useSearchParams } from "next/navigation";
import {
  ascendingSortByValue,
  descendingSortByValue,
  filterIncludeString,
  noSort,
} from "../utils";

type IProps = {
  search: string;
};

type SortObject = {
  type: "email" | "name" | "type";
  index: number;
};

enum SortType {
  None = 0,
  Ascending = 1,
  Descending = 2,
}

/**
 * Component to display a table of users
 * @param {IUser} users a list of users
 **/
const UserTable = ({ search }: IProps) => {
  const searchParams = useSearchParams();

  const page = Number(searchParams.get("page") ?? "1") - 1;
  const per_page = Number(searchParams.get("per_page") ?? "10");
  const minPage = page * per_page;
  const maxPage = page * per_page + per_page;
  const { users, setUsers } = useUsersContext();
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
    return SortType.None;
  };
  const showSortIcon = () => {
    switch (sortObject.index) {
      case SortType.Ascending:
        return <AscendantSort />;
      case SortType.Descending:
        return <DescendantSort />;
      default:
        return <DefaultSort />;
    }
  };

  return (
    <div className="relative overflow-x-auto p-4">
      <table className="sd:w-full md:table-fixed text-sm text-left text-gray-500 dark:text-gray-400 rounded shadow">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th
              scope="col"
              onClick={() => {
                setSortObject({
                  type: "email",
                  index: setIndex("email"),
                });
              }}
            >
              <div>
                Email
                {sortObject.type === "email" ? showSortIcon() : <DefaultSort />}
              </div>
            </th>
            <th
              scope="col"
              onClick={() => {
                setSortObject({
                  type: "name",
                  index: setIndex("name"),
                });
              }}
            >
              <div>
                Name
                {sortObject.type === "name" ? showSortIcon() : <DefaultSort />}
              </div>
            </th>
            <th
              scope="col"
              onClick={() => {
                setSortObject({
                  type: "type",
                  index: setIndex("type"),
                });
              }}
            >
              <div>
                Type
                {sortObject.type === "type" ? showSortIcon() : <DefaultSort />}
              </div>
            </th>
            <th></th>
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
            .slice(minPage, maxPage)
            .map((user: IUser, index: number) => {
              return (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <p>{user.email}</p>
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <p>{user.name}</p>
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <p>
                      <Type type={user.type} />
                    </p>
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <UserUpdateModal
                      user={users[index]}
                      onChange={(newUser: IUser) => {
                        setUsers((users) => {
                          return users.map((user) => {
                            if (user.id === newUser.id) return newUser;
                            return user;
                          });
                        });
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
