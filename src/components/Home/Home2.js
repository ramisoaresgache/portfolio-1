import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className='home-about-section' id='about'>
      <Container>
        <Row>
          <Col md={8} className='home-about-description'>
            <h1 style={{ fontSize: "2.6em" }}>
              TE CUENTO <span className='purple'> SOBRE MI </span>
            </h1>
            <p className='home-about-body'>
              DATA ENGINEER
              <br />
              <br />
              Trabajo en la Municipalidad de Vicente López sobre SIGIP, el sistema integral de gestión de ingresos
              públicos. Desarrollo procesos ETL, pipelines, automatizaciones y consultas dinámicas para analizar
              recaudación, tasas, deuda, cobrabilidad, inspecciones, estadísticas y proyecciones.
              <br />
              <br />
              Combino <b className='purple'>SQL, Python, Informix, Spark, Hadoop y BI</b> para transformar
              bases relacionales y grandes volúmenes de datos en información útil para la toma de decisiones.
              También participo en la modernización de sistemas legacy con React, Node.js y tecnologías web.
              <br />
              <br />
              Comencé en la Municipalidad con foco en análisis funcional, relevamiento y documentación de procesos;
              hoy mi perfil está orientado a <b className='purple'>ingeniería de datos, automatización, procesamiento,
              almacenamiento y reporting</b>.
              <br />
              <br />
              Actualmente curso <b className='purple'>Ciencia de Datos e Inteligencia Artificial</b>,
              con foco en ingeniería de datos, BI y modelos predictivos.
            </p>
          </Col>
          <Col md={4} className='myAvtar'>
            <Tilt>
              <img src={myImg} className='img-fluid' alt='avatar' />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className='home-about-social'>
            <h1>PODÉS ENCONTRARME</h1>
            <p>
              Sentite libre de <span className='purple'>conectar </span>conmigo
            </p>
            <ul className='home-about-social-links'>
              <li className='social-icons'>
                <a
                  href='https://github.com/ramisoaresgache'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='mailto:ramisoaresgache@hotmail.com'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://www.linkedin.com/in/ramiro-soaresgache/'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <FaLinkedinIn />
                </a>
              </li>

            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
