import React from "react";
import BarraPagina from "../Componentes/BarraPagina/BarraPagina";
import CajaTexto from "../Componentes/CajaTexto/CajaTexto";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";

const informacion = {
  title: "Objetivo:",
  descripcion:
    "El principal objetivo de este laboratorio es la aplicacion de una base de datos SQL o NoSQL, a su vez mostrar una de las multiples aplicaciones como lo son graficas en paginas web"
};

const Bases = {
  title: "Bases:",
  descripcion:
    "Para este laboratorio se utilizo para FrontEnd React y la libreria Material UI, para la base de datos MongoDB y adicion a lo anterior se utilizo FastApi (Python) para el traslado de la base de datos"
};
const Contexto = {
  title: "Contexto:",
  descripcion:
    "Durante los años 2020-2021, sufrimos una pandemia debido al coronavirus (COVID) producido por el SARS-CoV 2, una manera a la que pudimos afrontarla es mediante el estudio de casos que se obtenian en un dia y a su vez cuantas muertes, esto permitiendo estimar cuando prodian ocurrir olas de infeccion o poder identificar las condiciones que provocan su propagación. "
};

export default function Home() {
  return (
    <Box
      sx={{
        display: "grid",
        gap: 3,
        backgroundColor: "#f1ebeb"
      }}
    >
      <BarraPagina />
      <CajaTexto
        Title={informacion.title}
        Descripcion={informacion.descripcion}
      />
      <CajaTexto Title={Bases.title} Descripcion={Bases.descripcion} />
      <Stack direction="row" spacing={4} justifyContent="center">
        <Avatar
          alt="React"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
          sx={{
            height: 75,
            width: 75,
            boxShadow: 2,
            p: 1
          }}
        />
        <Avatar
          alt="Mui"
          src="https://mui.com/static/logo.png"
          sx={{
            height: 75,
            width: 75,
            borderRadius: 1,
            p: 1,
            boxShadow: 2
          }}
        />
        <Avatar
          alt="MongoDB"
          src="https://www.tutorialsteacher.com/Content/images/home/mongodb.svg"
          sx={{
            height: 75,
            width: 75,
            boxShadow: 2,
            p: 1
          }}
        />
        <Avatar
          alt="FastApi"
          src="https://cdn.worldvectorlogo.com/logos/fastapi.svg"
          sx={{
            height: 75,
            width: 75,
            boxShadow: 2,
            p: 1
          }}
        />
      </Stack>
      <CajaTexto Title={Contexto.title} Descripcion={Contexto.descripcion} />
    </Box>
  );
}
