import { Avatar, Box, Paper, Typography } from "@mui/material";
import React from "react";
import greenLines from "../../resources/bgPiantaRight.jpg";
import CellGridCustom from "../CellGridCustom";
import lente from "../../resources/icons/magnifying-glass.png";
import town from "../../resources/icons/village.png";
import help from "../../resources/icons/handshake.png";
import map from "../../resources/icons/map.png";
import mountain from "../../resources/icons/mountains.png";
import community from "../../resources/icons/community.png";

const ComeFunziona = () => {
  const leftCard = [
    { title: "Esplora", text: " Esplora l'Italia attraverso mappe interattive e immagini spettacolari.", src: map },
    {
      title: "Scopri",
      text: " Scopri la bellezza della natura : laghi, fiumi, riserve naturali e sentieri panoramici.",
      src: mountain,
    },
    { title: "Rivivi", text: "Rivivi la storia visitando borghi antichi, chiese e castelli secolari.", src: town },
  ];

  const rightCard = [
    {
      title: "Proteggi",
      text: "Scopri la biodiversità presente in Italia e aiutaci a proteggerla e tutelarla.",
      src: help,
    },
    {
      title: "Progetti",
      text: "Scopri i progetti di recupero  per le specie animali e vegetali in via di estinzione",
      src: lente,
    },
    {
      title: "Community",
      text: "Unisciti alla community di Biospere, per conoscere altri appassionati come te",
      src: community,
    },
  ];

  return (
    <Paper
      sx={{
        backgroundImage: `url(${greenLines})`,
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        borderRadius: 0,
        boxShadow: 0,
      }}>
      <Box display="flex" p="40px 20px" flexDirection="column" justifyContent="center" marginTop="25px">
        <Box display="flex" justifyContent="center" marginBottom="40px">
          <Typography variant="h2" textTransform="uppercase">
            come funziona
          </Typography>
        </Box>
        <Box m="0px 40px 100px">
          <Box
            p="20px"
            rowGap="20px"
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)"
            sx={{ backgroundColor: "var( --primary-100)" }}>
            {/* sx={{ backgroundColor: "var( --secondary-300)" }} */}
            <CellGridCustom gridColumn="span 6">
              {leftCard.map((item) => (
                <Box p="20px 140px" display="flex" alignItems="center">
                  <img src={item.src} alt="" width="40px" height="40px"></img>
                  <Box display="flex" flexDirection="column" justifyContent="center" sx={{ ml: "20px" }}>
                    <Typography variant="h5" fontWeight="bold">
                      {item.title}
                    </Typography>
                    <Typography color="var(--secondary-700)">{item.text}</Typography>
                  </Box>
                </Box>
              ))}
            </CellGridCustom>

            <CellGridCustom gridColumn="span 6">
              {rightCard.map((item) => (
                <Box p="20px 140px" display="flex" alignItems="center">
                  <img src={item.src} alt="" width="40px" height="40px"></img>
                  <Box display="flex" flexDirection="column" justifyContent="center" sx={{ ml: "20px" }}>
                    <Typography variant="h5" fontWeight="bold">
                      {item.title}
                    </Typography>
                    <Typography color="var(--secondary-700)">{item.text}</Typography>
                  </Box>
                </Box>
              ))}
            </CellGridCustom>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default ComeFunziona;
