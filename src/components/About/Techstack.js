import React from "react";
import { Col, Row } from "react-bootstrap";

import {
  DiJavascript1,
  DiPython,
  DiNodejs,
  DiReact,
  DiGit,
  DiDatabase,
  DiFirebase,
} from "react-icons/di";
import { SiPostgresql } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython /><span className="tech-label">Python</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 /><span className="tech-label">JavaScript</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs /><span className="tech-label">Node.js</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDatabase /><span className="tech-label">SQL / Informix</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit /><span className="tech-label">Git</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql /><span className="tech-label">PostgreSQL</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact /><span className="tech-label">React</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDatabase /><span className="tech-label">Firebase</span>
      </Col>
    </Row>
  );
}

export default Techstack;
