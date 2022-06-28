import Login from "./LoginRequired";
import React from "react";
// ./PrivateProfile.tsx
// export type ProfileProps = {
//     name: string;
//   };
import { ProfileProps } from "./PrivateProfile";
type PrivateProps = {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfileProps>;
};
const Private = ({ isLoggedIn, component: Component }: PrivateProps) =>
  isLoggedIn ? <Component name="ThangVo" /> : <Login />;

export default Private;
