import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import React from "react";
import foto1 from "../../resources/galleria/Cyprinus.jpeg";
import foto2 from "../../resources/galleria/Sciurus carolinensis .jpg";
import foto3 from "../../resources/galleria/Geranium nodosum.jpg";

const SezImages = () => {
  return (
    <Box display="flex" p="40px 20px" flexDirection="column" justifyContent="center" marginTop="25px">
      <Box display="flex" justifyContent="center" marginBottom="40px">
        <Typography variant="h2" textTransform="uppercase">
          Galleria
        </Typography>
      </Box>
      <Box m="0px 40px 100px">
        <ImageList sx={{ width: "100%" }} cols={3} rowHeight={"30px"}>
          <ImageListItem sx={{ width: "100%", backgroundPosition: "center" }}>
            <img
              src={foto1}
              alt=""
              //loading="lazy"
            />
          </ImageListItem>
          <ImageListItem sx={{ width: "100%", backgroundPosition: "center" }}>
            <img
              src={foto2}
              alt=""
              //loading="lazy"
            />
          </ImageListItem>
          <ImageListItem sx={{ width: "100%", backgroundPosition: "center" }}>
            <img
              src={foto3}
              alt=""
              //loading="lazy"
            />
          </ImageListItem>
        </ImageList>
      </Box>
    </Box>
  );
};

export default SezImages;
