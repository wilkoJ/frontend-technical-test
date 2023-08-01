"use client";
import { useEffect, useState, useContext } from "react";
import UserTable from "./components/UserTable";
import SearchBar from "./components/SearchBar";
import IUser from "./model/IUser";
import Pagination from "./components/Pagination";

import { useRouter } from "next/navigation";

import { filterIncludeString } from "./utils";

import { useUsersContext } from "./store/store";

import Table, { ColumnDefinitionType } from "./components/genericTable/Table";
import { Loading } from "./components/assets/Icons";
import UserAddModal from "./components/Modal/UserAddModal";

const App = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  // To use the generic table;

  const router = useRouter();
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
  const page = Number(searchParams["page"] ?? "1");
  const per_page = Number(searchParams["per_page"] ?? "10");
  const { users, setUsers } = useUsersContext();
  const [search, setSearch] = useState("");
  const [loaded, setLoaded] = useState(false);

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
      <div className="md:flex justify-between bg-grey-500 p-4">
        <SearchBar
          onChange={(value: string) => {
            setSearch(value);
            router.push(`/?page=${1}&per_page=${per_page}`);
          }}
        />
        <UserAddModal />
      </div>
      {/* <Table data={users} columns={columns} /> */}
      {loaded ? <UserTable search={search} /> : <Loading />}
      <Pagination
        length={Math.ceil(
          users.filter((user) => {
            return filterIncludeString(
              user.name.toLocaleLowerCase(),
              search.toLocaleLowerCase()
            );
          }).length
        )}
        pagination_limit={3}
      />
    </div>
  );
};

export default App;
