import React from "react";
type ListProps<T> = {
  items: T[];
  handleClick: (value: T) => void;
};

const List = <T extends {}>({ items, handleClick }: ListProps<T>) => {
  return (
    <div>
      <h2>List of items</h2>
      {items.map((val, index) => {
        return (
          <button key={index} onClick={() => handleClick(val)}>
            {JSON.stringify(val)}
          </button>
        );
      })}
    </div>
  );
};

export default List;

function getTuple<T>(ele1: T, ele2: T): [T, T] {
  return [ele1, ele2];
}
const stringTuple = getTuple<number>(1, 2);
