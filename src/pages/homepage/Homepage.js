import { Box } from "@mui/material";
import React from "react";
import ChiSiamo from "../../Component/homepage/chiSiamo";
import ComeFunziona from "../../Component/homepage/comeFunziona";
import SezImgaes from "../../Component/homepage/sezImgaes";

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
