import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola a todos, soy <span className="purple">Ramiro Soares Gahce </span>
            de  <span className="purple"> Buenos Aires, Argentina.</span>
            <br />Soy un graduado de Henry como FullStack development y en la carrera de Ciencias de Datos e IA en el instituto IEA.
            <br />
            <br />
            Actualmente soy un Analista de datos con experiencia en gobierno local, automatización de reportes y soporte a la toma de decisiones. Foco en ETL con Python/SQL, BI con Power BI y métricas de impacto. Busco potenciar áreas de finanzas públicas con soluciones de datos reproducibles.
            <br />
            <br />
            Ademas de trabajar con los datos tambien me gustan hacer algunas de estas cosas👇🏼
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Entrenar es un buen estimulo para tener la cabeza fresca 🏋🏼‍♂️💪🏼
            </li>
            <li className="about-activity">
              <ImPointRight /> Leer/mirar videos sobre tecnologia 📖 👨🏼‍💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajar ✈️🌎
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
                "Si supieras que no vas a fallar, ¿que tan grande seria tu sueño?"{" "}
          </p>
          <footer className="blockquote-footer">Ramiro</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
