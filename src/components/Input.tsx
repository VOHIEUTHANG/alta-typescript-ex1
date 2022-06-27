import React from "react";
type InputType = {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const Input = ({ value, handleChange }: InputType) => {
  return <input onChange={(e) => handleChange(e)} value={value}></input>;
};

export default Input;
