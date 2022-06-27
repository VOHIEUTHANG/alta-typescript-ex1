import React from "react";

type NameType = {
  first: string;
  last: string;
};
type PersonProps = {
  name: NameType;
  nameList: NameType[];
};
const Person = ({ name, nameList }: PersonProps) => {
  return (
    <ul>
      {nameList.map((name, index) => {
        return <li key={index}>{`Welcome ${name.first} ${name.last}`}</li>;
      })}
    </ul>
  );
};

export default Person;
