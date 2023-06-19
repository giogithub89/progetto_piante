import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/footer";
import { Box } from "@mui/material";

const Layout = () => {
  return (
    <div>
      {" "}
      <Navbar />
      <Box marginTop="51px">
        <Outlet />
      </Box>
      <Footer />
    </div>
  );
};

export default Layout;
