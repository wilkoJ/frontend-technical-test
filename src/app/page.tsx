"use client";
import { useEffect, useState, useContext } from "react";
import UserTable from "./components/UserTable";
import SearchBar from "./components/SearchBar";
import IUser from "./model/IUser";
import Pagination from "./components/Pagination";

import { filterIncludeString } from "./utils";

import { useUsersContext } from "./store/store";

import Table, { ColumnDefinitionType } from "./components/genericTable/Table";
import Loading from "./components/Loading";
import UserAddModal from "./components/Modal/UserAddModal";

const App = () => {
  // To use the generic table;
  // const columns: ColumnDefinitionType<IUser, keyof IUser>[] = [
  //   {
  //     key: "name",
  //     header: "Name",
  //   },
  //   {
  //     key: "email",
  //     header: "Email adress",
  //   },
  //   {
  //     key: "type",
  //     header: "type",
  //   },
  // ];

  const { users, setUsers } = useUsersContext();
  const [search, setSearch] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const paginationSize = 10;

  const fetchData = async () => {
    const res = await fetch("/search");
    const data = await res.json();
    setUsers(data.users);
    setLoaded(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="md:flex md:flex-col md:items-center bg-grey-500 p-4">
      <SearchBar
        onChange={(value: string) => {
          setSearch(value);
          setCurrentPage(0);
        }}
      />
      <UserAddModal />
      {/* <Table data={users} columns={columns} /> */}
      {loaded ? (
        <UserTable
          users={users}
          search={search}
          currentPage={currentPage}
          paginationSize={paginationSize}
        />
      ) : (
        <Loading />
      )}
      <Pagination
        length={Math.ceil(
          users.filter((user) => {
            return filterIncludeString(
              user.name.toLocaleLowerCase(),
              search.toLocaleLowerCase()
            );
          }).length
        )}
        paginationSize={paginationSize}
        current={currentPage}
        onClick={(value: number) => {
          setCurrentPage(value);
        }}
      />
    </div>
  );
};

export default App;
