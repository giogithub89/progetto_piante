import { Paper } from "@mui/material";

const CustomCard = ({ children, flexDirection, m, p, alignItems, marginX, marginY, marginRight }) => {
  return (
    <Paper
      sx={{
        m: m,
        marginX: marginX,
        marginY: marginY,
        marginRight: marginRight,
        p: p,
        borderRadius: "15px",
        display: "flex",
        flexDirection: { flexDirection },
        alignItems: { alignItems },
        backgroundColor: "white",
      }}
      elevation={3}
      height="70%">
      {children}
    </Paper>
  );
};

export default CustomCard;
