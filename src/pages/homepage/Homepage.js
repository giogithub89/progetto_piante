import { Box } from "@mui/material";
import React from "react";
import ChiSiamo from "./ChiSiamo";
import ComeFunziona from "./ComeFunziona";
import Hero from "./Hero/Hero";

const Homepage = () => {
  return (
    <Box>
      <Hero></Hero>
      <ChiSiamo></ChiSiamo>
      <ComeFunziona></ComeFunziona>
    </Box>
  );
};

export default Homepage;
