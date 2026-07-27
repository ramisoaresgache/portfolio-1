import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Data Engineer",
          "SQL - Python - ETL - Pipelines - BI",
          "Spark - Hadoop - PySpark",
          "Soluciones internas y automatización de datos",
          "Estudiante de Ciencia de Datos e IA",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
