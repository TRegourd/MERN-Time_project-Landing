import React from "react";
import BackTop from "./BackTop";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children, navLight }: any) => {
  if (navLight === undefined) {
    navLight = true;
  }
  return (
    <div className="dark:bg-slate-900">
      <Navbar />
      <div>{children}</div>
      <Footer />
      <BackTop />
    </div>
  );
};

export default Layout;
