"use client";
import { useEffect, useState } from "react";
import UserTable from "./components/UserTable";
import IUser from "./model/IUser";
const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);
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
      <UserTable users={users} />
    </div>
  );
};

export default App;
