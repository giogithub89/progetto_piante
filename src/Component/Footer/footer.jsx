import { Box, Link, ListItemText, Paper, Typography } from "@mui/material";
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import abstract from "../../resources/abstract_bbg.jpeg";

const ListItemCustom = ({ href, text, onClick }) => {
  return (
    <ListItemText>
      <Link href={href} underline="none" color="inherit" onClick={onClick}>
        {text}
      </Link>
    </ListItemText>
  );
};

const Footer = () => {
  return (
    <Paper
      id="social"
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
            <ListItem sx={{ flexDirection: "column", alignItems: "start", pl: "0px" }}>
              <ListItemCustom text="Homepage" href={"#"} />
              <ListItemCustom text="Esplora" href={"#"} />
              <ListItemCustom text="Termini e Condizioni" href={"#"} />
              <ListItemCustom text="Privacy" href={"#"} />
            </ListItem>
          </List>

          <List sx={{ flex: 1, color: "white" }}>
            <Typography variant="h4">Social</Typography>
            <ListItem sx={{ flexDirection: "column", alignItems: "start", pl: "0px" }}>
              <ListItemText>Instagram</ListItemText>
              <ListItemText>Facebook</ListItemText>
              <ListItemText>Bigbag</ListItemText>
            </ListItem>
          </List>
          <List sx={{ flex: 1, color: "white" }}>
            <Typography variant="h4">Contatti</Typography>
            <ListItem sx={{ flexDirection: "column", alignItems: "start", pl: "0px" }}>
              <ListItemText>info@biosphere-italia.com</ListItemText>
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
