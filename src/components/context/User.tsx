import React, { useContext } from "react";
import { userContext } from "./UserContext";
const User = () => {
  const userContextValue = useContext(userContext);

  const handleLogin = () => {
    userContextValue.setUser({ name: "Thang", email: "thang@gmail.com" });
  };
  const handleLogout = () => {
    userContextValue.setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {userContextValue?.user?.name}</div>
    </div>
  );
};

export default User;
