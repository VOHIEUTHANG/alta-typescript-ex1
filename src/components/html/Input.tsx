import React from "react";
type InputProps = React.ComponentProps<"input">;

const Input = (props: InputProps) => {
  console.log("props", props);
  return <input {...props} />;
};

export default Input;
