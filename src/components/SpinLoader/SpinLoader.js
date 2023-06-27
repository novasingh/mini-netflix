import React from "react";
const SpinLoader = ({ width, height, color }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="spinner-border"
        role="status"
        style={{
          color: color,
          width: width,
          height: height,
        }}
      ></div>
    </div>
  );
};

export default SpinLoader;
