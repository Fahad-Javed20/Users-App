import { useEffect, useState } from "react";
import type { UserType } from "../types/UserType";
import UserFormComponent from "./UserFormComponent";
import UserListComponent from "./UserListComponent";

const UserDashboard = () => {
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:3000/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  const handelUser = (newUser: UserType) => {
    setUsers((prevUsers) => [newUser,...prevUsers]);
  };

  return (
    <div>
      <UserFormComponent onAddUser={handelUser} />
      <UserListComponent usersList={users} />
    </div>
  );
};

export default UserDashboard;
