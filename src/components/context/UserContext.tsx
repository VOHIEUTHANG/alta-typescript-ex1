import React, { createContext, ReactNode, useState } from "react";

type UserType = {
  name: string;
  email: string;
};
type UserContextType = {
  user: UserType | null;
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
};
export const userContext = createContext<UserContextType>(
  {} as UserContextType
);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserType | null>(null);

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};
