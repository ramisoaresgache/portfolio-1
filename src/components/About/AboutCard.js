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
            <br />Soy un graduado de Henry como FullStack development.
            <br />
            <br />
            Ademas de programar ¡ alguanas de las cosa que me gustan hacer 👇🏼!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jugar a videojuegos
            </li>
            <li className="about-activity">
              <ImPointRight /> Leer/mirar videos sobre tecnologia
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajar
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
