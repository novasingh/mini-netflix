import React from "react";
import Header from "../components/Header";

function MasterLayout({ children }) {
  return (
    <div className="w-100 layout-default">
      <Header title="Dashboard" />
      {children}
    </div>
  );
}

export default MasterLayout;
