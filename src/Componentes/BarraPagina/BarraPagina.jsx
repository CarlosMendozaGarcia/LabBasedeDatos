import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Image from "./Image";
import Titulo from "./Titulo";

export default function BarraPagina() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#b71c1c",
        borderRadius: 2,
        boxShadow: 2
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(12,1fr)",
          gridTemplateAreas:
            '"icon title title title title title title title title"',
          gap: 0
        }}
      >
        <Box sx={{ gridArea: "icon" }}>
          <Image />
        </Box>
        <Box sx={{ gridArea: "title" }}>
          <Titulo />
        </Box>
      </Box>
    </AppBar>
  );
}
