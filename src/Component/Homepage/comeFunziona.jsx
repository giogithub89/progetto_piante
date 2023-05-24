import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import greenLines from "../../resources/bgPiantaRight.jpg";

const ComeFunziona = () => {
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
        <Box marginBottom="60px">
          <Typography m="0px 40px 60px">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default ComeFunziona;
