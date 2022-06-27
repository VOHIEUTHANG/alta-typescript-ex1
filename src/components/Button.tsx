import React from "react";
type ButtonProps = {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void;
  children: string;
};
const Button = ({ handleClick, children }: ButtonProps) => {
  return <button onClick={(e) => handleClick(e, 1)}>{children}</button>;
};

export default Button;
