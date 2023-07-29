"use client";
import { useEffect, useState } from "react";
import UserTable from "./components/UserTable";
import Search from "./components/SearchBar";
import IUser from "./model/IUser";

const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    const res = await fetch("/search");
    const data = await res.json();
    setUsers(data.users);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Search
        onChange={(value: string) => {
          setSearch(value);
        }}
        search={search}
      />
      <UserTable users={users} search={search} />
    </div>
  );
};

export default App;
