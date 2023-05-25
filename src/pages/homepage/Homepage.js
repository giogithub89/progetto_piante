import { Box } from "@mui/material";
import React from "react";
import ChiSiamo from "../../Component/Homepage/chiSiamo";
import ComeFunziona from "../../Component/Homepage/comeFunziona";
import SezImgaes from "../../Component/Homepage/sezImgaes";

const Homepage = () => {
  return (
    <Box>
      <ChiSiamo />
      <ComeFunziona />
      <SezImgaes />
    </Box>
  );
};

export default Homepage;
