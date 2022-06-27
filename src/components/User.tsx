import { useState } from "react";
import { Z_UNKNOWN } from "zlib";
type UserType = {
  name: {
    name: string;
  };
  email: string;
};
const User = () => {
  const [user, setUser] = useState<UserType>({} as UserType);

  return (
    <div>
      <button
        onClick={() => {
          setUser({ name: { name: "Thang" }, email: "thang@gmail.com" });
        }}
      >
        Login
      </button>
      <div>User name is {user?.name?.name}</div>
      <div>User email is {user.email}</div>
    </div>
  );
};

export default User;
