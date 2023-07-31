import React from "react";
import Type from "./Type";
import IUser from "../model/IUser";
import Modal from "./Modal/Modal";

import { useUsersContext } from "../store/store";
import UserUpdateModal from "./Modal/UserUpdateModal";
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
    <div className="relative overflow-x-auto p-4">
      <table className="sd:w-full md:table-fixed text-sm text-left text-gray-500 dark:text-gray-400 rounded shadow">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 font-light">
              Email{" "}
            </th>
            <th scope="col" className="px-6 py-3 font-light">
              Name
            </th>
            <th scope="col" className="px-6 py-3 font-light">
              Type
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: IUser, index: number) => {
            if (
              index > currentPage * paginationSize - 1 &&
              index < currentPage * paginationSize + paginationSize
            )
              return (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    onClick={() => {}}
                  >
                    {user.email}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {user.name}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <Type type={user.type} />
                  </td>
                  <td>
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
