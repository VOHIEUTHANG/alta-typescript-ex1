import React from "react";
type ButtonProps = {
  variant: "primary" | "secondary";
  children: string;
} & Omit<React.ComponentProps<"button">, "children">;

const Button = ({ variant, children, ...rest }: ButtonProps) => {
  return (
    <button {...rest} className={`class-with-${variant}`}>
      {children}
    </button>
  );
};

export default Button;
