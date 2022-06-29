import React from "react";

type TextOwnProps<E extends React.ElementType> = {
  color?: string;
  size?: string;
  children: string | React.ReactNode;
  elementType?: E;
};

type TextProps<E extends React.ElementType> = TextOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>;
const Text = <E extends React.ElementType = "div">({
  color,
  size,
  children,
  elementType,
  ...rest
}: TextProps<E>) => {
  const Component = elementType ?? "div";
  return (
    <Component {...rest} className={`class-with-${size}-${color}`}>
      {children}
    </Component>
  );
};

export default Text;
