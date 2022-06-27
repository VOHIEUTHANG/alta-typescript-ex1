import React from "react";
type StatusProps = {
  status: "loading" | "error" | "success";
};

const Status = ({ status }: StatusProps) => {
  return (
    <div>
      <h2>
        {status === "loading"
          ? "Loading..."
          : status === "success"
          ? "Data fetched successfuly!"
          : "Erro fetch data !"}
      </h2>
    </div>
  );
};

export default Status;
