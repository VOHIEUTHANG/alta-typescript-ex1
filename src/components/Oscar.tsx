import React from "react";

type OscarProps_reactNode = {
  children: React.ReactNode;
};
type optionalProps = {
  name?: string;
};
type OscarProps_PrimitiveType = {
  children: string | number | boolean;
};
const Oscar = ({
  children,
}: (OscarProps_reactNode & optionalProps) | OscarProps_PrimitiveType) => {
  return <div>{children}</div>;
};

export default Oscar;
