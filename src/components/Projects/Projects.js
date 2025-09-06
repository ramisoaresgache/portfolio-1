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
          Trabajos <strong className="purple">Recientes </strong>
        </h1>
        <p style={{ color: "white" }}>
          Aca hay algunos proyectos en los que eh estado trabajando.
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
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="Ecomerce"
              description="Es un analisis de datos de ventas de distintas tiendas online"
              ghLink="https://mvl365-my.sharepoint.com/:u:/g/personal/ramiro_godino_vicentelopez_gov_ar/EZ0p1urMi8FLoABgAd_vUL0BKHDxK0UQoWFgengyK64LNw"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={accidentedetransito}
              isBlog={false}
              title="Accidentes de transito"
              description="Analisis de los accidentes de transito en las distintas regiones"
              ghLink="https://mvl365-my.sharepoint.com/:u:/g/personal/ramiro_godino_vicentelopez_gov_ar/ESnpmzGdgnBOg1qsiGZ_AJEBZSCMm7hY6zTCV4blh8kR-Q?e=Fw20A0"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={atencionalcliente}
              isBlog={false}
              title="Atencion al cliente"
              description="Analsis de lo que es el servicio de atencion al cliente en la empresa"
              ghLink="https://mvl365-my.sharepoint.com/:u:/g/personal/ramiro_godino_vicentelopez_gov_ar/EZXgvVQspyNNi_h7_2udA8IBNS6EXYSIIi_zYGVomzLQOQ?e=wJX7UV"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
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
