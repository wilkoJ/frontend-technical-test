"use client";
import { useEffect, useState } from "react";
import UserTable from "./components/UserTable";
import SearchBar from "./components/SearchBar";
import IUser from "./model/IUser";
import Pagination from "./components/Pagination";

const App = () => {
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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexFlow: "column",
        alignItems: "center",
      }}
    >
      <SearchBar
        onChange={(value: string) => {
          setSearch(value);
        }}
      />
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
