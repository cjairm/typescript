import React, { FC } from "react";

const Loader: FC = () => {
  return (
    <div className="d-flex align-items-center">
      <strong>Loading...</strong>
      <div
        className="spinner-grow text-info ml-auto"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      ></div>
    </div>
  );
};

export default Loader;
