import { useContext } from "react";
import { userContext } from "./UserContext";

const User = () => {
  const { user, setUser } = useContext(userContext);

  return (
    <div>
      <button
        onClick={() => {
          setUser({ name: "Thang", email: "thang@gmail.com" });
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          setUser(null);
        }}
      >
        Logout
      </button>
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email}</div>
    </div>
  );
};

export default User;
