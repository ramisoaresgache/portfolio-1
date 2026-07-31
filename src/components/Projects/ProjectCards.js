import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { SiPowerbi } from "react-icons/si";
import "./ProjectCards.css";

function ProjectCards(props) {
  const technologies = props.technologies || [];

  return (
    <Card className="project-card-view">
      <div className="project-card-media">
        <Card.Img variant="top" src={props.imgPath} alt={`Vista previa de ${props.title}`} />
        {props.featured && <span className="project-card-badge">Proyecto destacado</span>}
        {props.confidential && (
          <span className="project-card-badge project-card-badge-confidential">
            Caso real · datos protegidos
          </span>
        )}
      </div>

      <Card.Body className="project-card-body">
        {props.category && <span className="project-card-category">{props.category}</span>}
        <Card.Title className="project-card-title">{props.title}</Card.Title>
        <Card.Text className="project-card-summary">{props.summary}</Card.Text>

        <div className="project-card-story">
          <div className="project-card-story-item">
            <span className="project-card-story-label">Problema</span>
            <p>{props.problem}</p>
          </div>
          <div className="project-card-story-item">
            <span className="project-card-story-label">Solución</span>
            <p>{props.solution}</p>
          </div>
          <div className="project-card-story-item project-card-impact">
            <span className="project-card-story-label">Impacto</span>
            <p>{props.impact}</p>
          </div>
        </div>

        {technologies.length > 0 && (
          <div className="project-card-technologies" aria-label="Tecnologías utilizadas">
            {technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        )}

        <div className="project-card-actions">
          {props.powerbiLink && (
            <Button variant="primary" href={props.powerbiLink} target="_blank" rel="noreferrer">
              <SiPowerbi /> &nbsp; Ver dashboard
            </Button>
          )}
          {props.ghLink && (
            <Button variant="primary" href={props.ghLink} target="_blank" rel="noreferrer">
              <BsGithub /> &nbsp;{props.isBlog ? "Blog" : "Ver código"}
            </Button>
          )}
          {!props.isBlog && props.demoLink && (
            <Button variant="primary" href={props.demoLink} target="_blank" rel="noreferrer">
              <CgWebsite /> &nbsp; Ver demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
