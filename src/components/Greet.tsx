import React from "react";
type greetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};
const Greet = ({ name, messageCount = 0, isLoggedIn }: greetProps) => {
  return (
    <p>
      {isLoggedIn
        ? `Welcome ${name}. You have ${messageCount}
      unread messages !`
        : "Welcome guest !"}
    </p>
  );
};

export default Greet;
