import React from "react";

type RandomNumberType = {
  value: number;
};
type PositiveNumber = RandomNumberType & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};
type NegativeNumber = RandomNumberType & {
  isPositive?: never;
  isNegative: boolean;
  isZero?: never;
};
type ZeroNumber = RandomNumberType & {
  isPositive?: never;
  isNegative?: never;
  isZero: boolean;
};
type RandomNumberProps = PositiveNumber | NegativeNumber | ZeroNumber;

const RandomNumber = ({
  value,
  isNegative,
  isPositive,
  isZero,
}: RandomNumberProps) => {
  return (
    <div>
      <h2>{value}</h2>
      {isNegative && "Negative"}
      {isPositive && "Positive"}
      {isZero && "Zero"}
    </div>
  );
};

export default RandomNumber;
