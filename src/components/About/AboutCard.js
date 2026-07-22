import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Soy <span className="purple">Ramiro Godino Soares Gache</span>, de
            <span className="purple"> Vicente López, Buenos Aires, Argentina.</span>
            <br />
            <br />
            Desde febrero de 2023 trabajo en la Municipalidad de Vicente López. Durante mi primer año
            me enfoqué en <span className="purple"> análisis funcional</span>, relevamiento de necesidades,
            documentación, testing y mejora de procesos para sistemas de gestión municipal.
            <br />
            <br />
            Actualmente mi perfil está orientado a <span className="purple"> Data Engineering</span>. Trabajo
            sobre SIGIP desarrollando procesos ETL, pipelines, consultas dinámicas y automatizaciones para
            módulos vinculados con recaudación, tasas, deuda, cobrabilidad, inspecciones, estadísticas y proyecciones.
            <br />
            <br />
            Automatizo reportes y procesos con Python, cron y SQL sobre Informix. Trabajo con bases municipales
            de volumen variable, incluyendo procesos sobre millones de registros, y centralizo información para
            20 usuarios internos. También participo en la modernización de sistemas legacy con React, Node.js,
            JavaScript, Python y Firebase.
            <br />
            <br />
            Actualmente curso Ciencia de Datos e Inteligencia Artificial en IEA. Me formé como desarrollador
            Full Stack en Henry y completé una capacitación en Power BI en la Universidad de la Ciudad.
            <br />
            <br />
            Fuera del trabajo, también disfruto de:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Entrenar para mantener la cabeza fresca
            </li>
            <li className="about-activity">
              <ImPointRight /> Leer y aprender sobre tecnología
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajar
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
                "Si supieras que no vas a fallar, ¿qué tan grande sería tu sueño?"{" "}
          </p>
          <footer className="blockquote-footer">Ramiro</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
