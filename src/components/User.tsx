import { useState } from "react";
type UserType = {
  name: string;
  email: string;
  phoneNumber?: string;
};
const User = () => {
  const [user, setUser] = useState<UserType>({} as UserType);
  return (
    <div>
      <button
        onClick={() => {
          setUser({ name: "Thang", email: "thang@gmail.com" });
        }}
      >
        Login
      </button>
      <div>User name is {user.name}</div>
      <div>User email is {user.email}</div>
    </div>
  );
};

export default User;
