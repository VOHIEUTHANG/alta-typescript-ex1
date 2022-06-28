import React, { createContext, useState } from "react";

export type AuthUser = {
  name: string;
  email: string;
};
type userContext_type = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};
export const userContext = createContext<userContext_type>(
  {} as userContext_type
);
export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};
