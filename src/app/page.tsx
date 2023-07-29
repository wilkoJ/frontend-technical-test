"use client";
import { useState } from "react";
import UserTable from "./components/UserTable";
import IUser from "./model/IUser";
const App = () => {
  const [users, setUsers] = useState<IUser[]>([
    { name: "John Doe", email: "john.doe@gmail.com", id: 1, type: "admin" },
    { name: "Jeanne Doe", email: "jeanne.doe@gmail.com", id: 2, type: "staff" },
    {
      name: "Jean Dupond",
      email: "jean.dupond@gmail.com",
      id: 3,
      type: "staff",
    },
    {
      name: "Kaleb Nunez",
      email: "kaleb.nunez@gmail.com",
      id: 4,
      type: "member",
    },
    {
      name: "Eloise Rodriguez",
      email: "eloise.rodriguez@gmail.com",
      id: 5,
      type: "member",
    },
  ]);
  return (
    <div>
      <UserTable users={users} />
    </div>
  );
};

export default App;
