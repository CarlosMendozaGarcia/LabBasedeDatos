import React from "react";
import { useState, useEffect } from "react";
import Home from "./Pages/Home";
import axios from "axios";
import GraficasBarras from "./Componentes/Graficas/GraficasBarras";

export default function App() {
  const [dataContinenteList, setDataContinenteList] = useState([{}]);
  const [dataSuramericaList, setDataSuramericaList] = useState([{}]);

  useEffect(() => {
    axios.get("127.0.0.1:8000/Api/DataContinente").then((res) => {
      setDataContinenteList(res.data);
    });
  });

  useEffect(() => {
    axios.get("127.0.0.1:8000/Api/DataSuramerica").then((res) => {
      setDataSuramericaList(res.data);
    });
  });

  const [casosContinenteData, setCasosContinenteData] = useState({
    labels: dataContinenteList.map((data) => data.continente),
    datasets: [
      {
        label: "Total de Casos",
        data: dataContinenteList.map((data) => data.casos_totales)
      }
    ]
  });

  const [muertesContinenteData, setMuertesContinenteData] = useState({
    labels: dataContinenteList.map((data) => data.continente),
    datasets: [
      {
        label: "Total de muertes",
        data: dataContinenteList.map((data) => data.nro_muertes_totales)
      }
    ]
  });

  const [casosSuramericaData, setCasosSuramericaData] = useState({
    labels: dataSuramericaList.map((data) => data.pais),
    datasets: [
      {
        label: "Total de Casos",
        data: dataSuramericaList.map((data) => data.casos_totales)
      }
    ]
  });

  const [muertesSuramericaData, setMuertesSuramericaData] = useState({
    labels: dataSuramericaList.map((data) => data.pais),
    datasets: [
      {
        label: "Total de muertes",
        data: dataSuramericaList.map((data) => data.nro_muertes_totales)
      }
    ]
  });

  return (
    <div>
      <Home />
      <GraficasBarras dataSet={casosContinenteData} />
      <GraficasBarras dataSet={muertesContinenteData} />
      <GraficasBarras dataSet={casosSuramericaData} />
      <GraficasBarras dataSet={muertesSuramericaData} />
    </div>
  );
}
