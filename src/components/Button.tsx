import React from "react";

type ButtonProps = {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: string;
};
const Button = ({ handleClick, children }: ButtonProps) => {
  return <button onClick={(e) => handleClick(e)}>{children}</button>;
};

export default Button;
