import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { SiPowerbi } from "react-icons/si";
import "./ProjectCards.css";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt={`Vista previa de ${props.title}`}
      />
      <Card.Body className="project-card-body">
        <Card.Title className="project-card-title">{props.title}</Card.Title>
        <Card.Text className="project-card-description">
          {props.description}
        </Card.Text>

        <div className="project-card-actions">
          {props.powerbiLink ? (
            <Button
              variant="primary"
              href={props.powerbiLink}
              target="_blank"
              rel="noreferrer"
            >
              <SiPowerbi /> &nbsp; Power BI
            </Button>
          ) : (
            props.ghLink && (
              <Button
                variant="primary"
                href={props.ghLink}
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub /> &nbsp;{props.isBlog ? "Blog" : "GitHub"}
              </Button>
            )
          )}

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              rel="noreferrer"
            >
              <CgWebsite /> &nbsp; Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;

