import React, { useState, useEffect } from "react";
import { getAllUsers } from "../../service/userService";
import { UserListComponent } from "../UserListComponent";

export const UserListContainer = () => {
  const [users, setUsers] = useState([]);

    useEffect(() => {
      getAllUsers().then((response) => {
        console.log("la promesa devolvio:",response);
        setUsers(response);
      });
      return;
    }, []);

  return (
    <div>
      <UserListComponent users={users}></UserListComponent>
    </div>
  );
};
