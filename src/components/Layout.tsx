import * as React from "react";

import Header from "./Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-20 py-10">
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
