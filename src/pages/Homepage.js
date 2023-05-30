import { Box } from "@mui/material";
import React from "react";
import ChiSiamo from "../Component/homepage/chiSiamo";
import ComeFunziona from "../Component/homepage/comeFunziona";
import SezImages from "../Component/homepage/sezImages";
import Hero from "../Component/homepage/Hero/Hero";

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
