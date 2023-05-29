import { Box } from "@mui/material";
import React from "react";
import ChiSiamo from "../Component/Homepage/chiSiamo";
import ComeFunziona from "../Component/Homepage/comeFunziona";
import SezImages from "../Component/Homepage/sezImages";
import Hero from "../Component/Homepage/Hero/Hero";

const Homepage = () => {
  return (
    <Box>
      <Hero />
      <ChiSiamo />
      <ComeFunziona />
      <SezImages />
    </Box>
  );
};

export default Homepage;
