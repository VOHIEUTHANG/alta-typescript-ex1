import React from "react";
import { PersonProps } from "./Types/Person.types";

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
