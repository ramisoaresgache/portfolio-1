import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineMail,
  AiOutlineWhatsApp,
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
              DESARROLLADOR FULLSTACK Y DATA SCIENTIST 💻 🎨
              <br />
              <br />
              Construyo soluciones de datos de punta a punta: extracción, limpieza y modelado;
              análisis estadístico; y reportes interactivos.
              Automatizo flujos con Python y n8n, e integro APIs y bases de datos de distintos orígenes.
              <i>
                <b className='purple'>SKILLS:
                Python · SQL · ETL · Dashboards · Streamlit · n8n · APIs · Control de calidad de datos · Estadística aplicada · Toma de decisiones basada en datos</b>
              </i>
              <br />
              <br />
              Soy apasionado por las tecnologías web y por cómo Internet
              interconecta a las personas y a los negocios alrededor del mundo
              &nbsp;
              <i>
                <b className='purple'>Me interesa combinar </b> análisis de datos y desarrollo para resolver problemas de negocio con impacto medible.
                Quiero unir mi experiencia en producto y operaciones con desarrollo para escalar procesos y mejorar decisiones.{" "}
                <b className='purple'>
                  Busco aportar en equipos donde los datos guíen la estrategia y el software la haga realidad.
                </b>
              </i>
              <br />
              <br />
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
            <h1>PODES ENCONTRARME</h1>
            <p>
              Sientete libre de  <span className='purple'>conectar </span>conmigo
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
              <li className='social-icons'>
                <a
                  href="https://wa.me/541157399999?"
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour home-social-icons'
                >
                  <AiOutlineWhatsApp />
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
