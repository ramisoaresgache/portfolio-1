import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Analista Funcional y de Datos",
          "SQL · Python · Automatización · BI",
          "Desarrollador de soluciones internas",
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
