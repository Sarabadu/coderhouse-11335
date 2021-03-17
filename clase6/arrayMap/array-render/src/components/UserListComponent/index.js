import React from "react";

export const UserListComponent = ({ users = [] }) => {
  console.log({ users });
  return <div>
    {users.map((user)=> <div key={user.id}>{user.name}</div>)}
  </div>;
};
