import React from "react";

type HorizontalPosition = "left" | "center" | "right";
type VerticalPosition = "top" | "center" | "bottom";
type PositionProps =
  | Exclude<`${HorizontalPosition}-${VerticalPosition}`, "center-center">
  | "center";
const Toast = ({ position }: { position: PositionProps }) => {
  return <div>Toast</div>;
};

export default Toast;
