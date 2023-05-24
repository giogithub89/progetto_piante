import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/footer";

const Layout = () => {
  return (
    <div>
      {" "}
      <Navbar />
      <Outlet /> <Footer />
    </div>
  );
};

export default Layout;
