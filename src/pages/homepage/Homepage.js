import { Box } from "@mui/material";
import React from "react";
import ChiSiamo from "../../Component/homepage/chiSiamo";
import ComeFunziona from "../../Component/homepage/comeFunziona";
import SezImgaes from "../../Component/homepage/sezImgaes";
import Hero from "../homepage/Hero/index";

const Homepage = () => {
  return (
    <Box>
      <Hero />
      <ChiSiamo />
      <ComeFunziona />
      <SezImgaes />
      {/* <SezImgaes /> */}
    </Box>
  );
};

export default Homepage;
