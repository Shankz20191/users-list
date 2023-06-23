import { useState, useEffect } from "react";
import List from "../components/List";

interface usersObject {
  name: {
    first: string;
    last: string;
    title: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

const Users = () => {
  const [users, setUsers] = useState<Array<usersObject>>([]);

  const fetchData = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    setUsers([...users, ...data.results]);
  };

  useEffect(() => {
    fetchData("https://randomuser.me/api/?results=25&inc=name,picture");
  }, []);

  return <List users={users} fetchData={fetchData} />;
};

export default Users;
