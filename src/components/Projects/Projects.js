import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../../components/Projects/ProjectCards";
import Particle from "../Particle";
import vibe from "../../Assets/Projects/vibe.png";
import pokemon from "../../Assets/Projects/pokemon.png";
import ecommerce from "../../Assets/Projects/ecommerce.png";
import accidentedetransito from "../../Assets/Projects/accidentedetransito.png";
import atencionalcliente from "../../Assets/Projects/atencionalcliente.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Trabajos <strong className="purple">Realizados </strong>
        </h1>
        <p style={{ color: "white" }}>
          Aca hay algunos proyectos que puedo mostrarte para que veas, son proyectos de demostracion ya que tengo que manteerner la confidencialidad de algunos trabajos por los trabajos que he realizado.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vibe}
              isBlog={false}
              title="Vibe"
              description="Un E-commerce realizado en la etapa final de mis estudios como desarrollador, fue hecho con tecnologias de JavaScript, React-Redux, Node.js, Postgresql . Cuenta con filtrados, busquedas, creaciones de productos, autenticacion, pasarela de pagos ."
              ghLink="https://github.com/ramisoaresgache/VIBE"
              demoLink="https://proyecto-final-vibes.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pokemon}
              isBlog={false}
              title="Pokedex"
              description="Este proyecto esta hecho con tecnologias de JavaScript, React-Redux, Node.js, Postgresql , es un proyecto que realize en mi etapa de formacion en henry en el cual podemos realizar busquedas, filtrados, creaciones de pokemones, y ver detalles de los mismos."
              ghLink="https://github.com/ramisoaresgache/PokemonPI/tree/master"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="Ecomerce"
              description="Es un analisis de datos de ventas de distintas tiendas online de Brasil, facturacion total por tienda por mes entre otros, vas a necesitar Power BI para poder abrir el archivo"
              powerbiLink="https://app.powerbi.com/groups/me/reports/6f9233aa-4222-4b70-abf4-5eada4453d36?ctid=4d5bce01-0858-4559-ab59-4a838e82866b&pbi_source=linkShare"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={accidentedetransito}
              isBlog={false}
              title="Accidentes de transito"
              description="Analisis de los accidentes de transito en las distintas regiones de Brasil, con los heridos fatales y los no fatales las causas entre otros, vas a necesitasr Power BI para poder abrir el archivo"
              powerbiLink="https://app.powerbi.com/groups/me/reports/74682954-d5c7-45a2-bea1-4a5c5b60f55a?ctid=4d5bce01-0858-4559-ab59-4a838e82866b&pbi_source=linkShare&bookmarkGuid=01c4d32f-b3ab-4327-8e6f-b3eba0c696ef"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={atencionalcliente}
              isBlog={false}
              title="Atencion al cliente"
              description="Analsis de lo que es el servicio de atencion al cliente en la empresa, donde podras ver el tiempo de atencion, la cantidad de llamadas, la atencion por area entre otros, vas a necesitasr Power BI para poder abrir el archivo"
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
