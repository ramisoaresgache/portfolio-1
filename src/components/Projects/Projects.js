import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../../components/Projects/ProjectCards";
import Particle from "../Particle";
import vibe from "../../Assets/Projects/vibe.png";
import pokemon from "../../Assets/Projects/pokemon.png";
import ecommerce from "../../Assets/Projects/ecommerce.png";
import accidentedetransito from "../../Assets/Projects/accidentedetransito.png";
import atencionalcliente from "../../Assets/Projects/atencionalcliente.png";
import sistemaConsultas from "../../Assets/Projects/sistema-consultas.svg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Trabajos <strong className="purple">Realizados </strong>
        </h1>
        <p style={{ color: "white" }}>
          Estos proyectos muestran mi trabajo con análisis de datos, automatización y desarrollo web.
          Las soluciones internas desarrolladas para la Municipalidad no se publican por confidencialidad.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sistemaConsultas}
              isBlog={false}
              title="Sistema de Estadísticas Municipal"
              description="Sistema interno desarrollado para Hacienda con consultas dinámicas sobre recaudación, tasas, deuda, cobrabilidad, inspecciones, períodos, zonas y categorías. Centraliza información para 20 usuarios internos y automatiza reportes sobre grandes volúmenes de datos."
              ghLink="https://github.com/ramisoaresgache/sistema_consutlas"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vibe}
              isBlog={false}
              title="Vibe"
              description="E-commerce desarrollado como proyecto final de Henry con JavaScript, React, Redux, Node.js y PostgreSQL. Incluye filtros, búsquedas, gestión de productos, autenticación y pasarela de pagos."
              ghLink="https://github.com/ramisoaresgache/VIBE"
              demoLink="https://proyecto-final-vibes.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pokemon}
              isBlog={false}
              title="Pokedex"
              description="Aplicación web desarrollada durante mi formación en Henry con JavaScript, React, Redux, Node.js y PostgreSQL. Permite buscar, filtrar, crear y consultar el detalle de Pokémon."
              ghLink="https://github.com/ramisoaresgache/PokemonPI/tree/master"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="Dashboard de e-commerce"
              description="Dashboard en Power BI para analizar ventas de tiendas online de Brasil, facturación total, evolución mensual e indicadores por tienda."
              powerbiLink="https://app.powerbi.com/groups/me/reports/6f9233aa-4222-4b70-abf4-5eada4453d36?ctid=4d5bce01-0858-4559-ab59-4a838e82866b&pbi_source=linkShare"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={accidentedetransito}
              isBlog={false}
              title="Accidentes de tránsito"
              description="Dashboard en Power BI sobre accidentes de tránsito en Brasil, con análisis por región, causas y víctimas fatales y no fatales."
              powerbiLink="https://app.powerbi.com/groups/me/reports/74682954-d5c7-45a2-bea1-4a5c5b60f55a?ctid=4d5bce01-0858-4559-ab59-4a838e82866b&pbi_source=linkShare&bookmarkGuid=01c4d32f-b3ab-4327-8e6f-b3eba0c696ef"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={atencionalcliente}
              isBlog={false}
              title="Atención al cliente"
              description="Dashboard en Power BI sobre atención al cliente: tiempos de respuesta, volumen de llamadas, rendimiento por área y principales indicadores del servicio."
              powerbiLink="https://app.powerbi.com/groups/me/reports/b2f034f3-2ca7-4a01-b657-a0548f98a767?ctid=4d5bce01-0858-4559-ab59-4a838e82866b&pbi_source=linkShare"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>  */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
