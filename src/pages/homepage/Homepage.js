import { Box } from "@mui/material";
import React from "react";
import ChiSiamo from "../../Component/homepage/ChiSiamo";
import ComeFunziona from "../../Component/homepage/ComeFunziona";
import SezImgaes from "../../Component/homepage/SezImgaes";
import Hero from "../homepage/Hero/index";

const Homepage = () => {
  return (
    <Box>
      <Hero />
      <ChiSiamo />
      <ComeFunziona />
      <SezImgaes />
    </Box>
  );
};

export default Homepage;
