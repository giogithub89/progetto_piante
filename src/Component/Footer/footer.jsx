import { Box, ListItemText, Paper, Typography } from "@mui/material";
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import leaf from "../../resources/leaf.jpg";
import abstract from "../../resources/abstract_bbg.jpeg";

const Footer = () => {
  return (
    <Paper
      sx={{
        backgroundImage: `url(${abstract})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        borderRadius: 0,
      }}
      width="100%">
      <Box p={"50px"}>
        <Box display="flex" alignItems="center">
          <List sx={{ flex: 1, color: "white" }}>
            <Typography variant="h4">Mappa del sito</Typography>
            <ListItem sx={{ flexDirection: "column", alignItems: "start" }}>
              <ListItemText>Homepage</ListItemText>
              <ListItemText>Contatti</ListItemText>
              <ListItemText>Esplora</ListItemText>
            </ListItem>
          </List>

          <List sx={{ flex: 1, color: "white" }}>
            <Typography variant="h4">Social</Typography>
            <ListItem sx={{ flexDirection: "column", alignItems: "start" }}>
              <ListItemText>Instagram</ListItemText>
              <ListItemText>Facebook</ListItemText>
              <ListItemText>Bigbag</ListItemText>
            </ListItem>
          </List>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center" marginTop="15px">
          <Typography sx={{ color: "white" }}>© Copyright LVHB Tech Group 2023</Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default Footer;
