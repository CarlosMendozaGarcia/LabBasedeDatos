import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export default function CajaTexto({ Title, Descripcion }) {
  "este laboratorio consistio en la creación de una base de datos a partir un dataset y a su vez la creación de graficas, todo esto a su vez implementado en un website";
  return (
    <Paper elevation={3} sx={{ backgroundColor: "#ff867c" }}>
      <Typography
        variant="h5"
        component="h2"
        sx={{
          color: "#b61817",
          fontWeight: "bold",
          font: "Arial",
          borderRadius: 2
        }}
      >
        {Title}
      </Typography>
      <Typography variant="h6" component="p">
        {Descripcion}
      </Typography>
    </Paper>
  );
}
