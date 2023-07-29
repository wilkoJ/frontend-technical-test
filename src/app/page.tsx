"use client";
import { useEffect, useState } from "react";
import UserTable from "./components/UserTable";
import SearchBar from "./components/SearchBar";
import IUser from "./model/IUser";
import Pagination from "./components/Pagination";
import Table, { ColumnDefinitionType } from "./components/Table";

const App = () => {
  const columns: ColumnDefinitionType<IUser, keyof IUser>[] = [
    {
      key: "name",
      header: "Name",
    },
    {
      key: "email",
      header: "Email adress",
    },
    {
      key: "type",
      header: "type",
    },
  ];

  const paginationSize = 10;
  const [users, setUsers] = useState<IUser[]>([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const fetchData = async () => {
    const res = await fetch("/search");
    const data = await res.json();
    setUsers(data.users);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <SearchBar
        onChange={(value: string) => {
          setSearch(value);
        }}
      />
      {/* <Table data={users} columns={columns} /> */}
      <UserTable
        users={users}
        search={search}
        currentPage={currentPage}
        paginationSize={paginationSize}
      />
      <Pagination
        length={Math.ceil(users.length / paginationSize)}
        current={currentPage}
        onClick={(value: number) => {
          setCurrentPage(value);
        }}
      />
    </div>
  );
};

export default App;
