import React from "react";
import { Col, Row } from "react-bootstrap";

import {
  DiJavascript1,
  DiPython,
  DiNodejs,
  DiReact,
  DiGit,
  DiDatabase,
} from "react-icons/di";
import { SiPostgresql, SiApachespark, SiApache, SiDatabricks, SiApacheairflow, SiDbt, SiMicrosoftazure, SiFastify } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython /><span className="tech-label">Python</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDatabase /><span className="tech-label">SQL / Informix</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachespark /><span className="tech-label">Spark / PySpark</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApache /><span className="tech-label">Hadoop</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDatabricks /><span className="tech-label">Databricks</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApacheairflow /><span className="tech-label">Airflow</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDbt /><span className="tech-label">dbt</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure /><span className="tech-label">Azure</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDatabase /><span className="tech-label">Data Warehouse</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql /><span className="tech-label">PostgreSQL</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 /><span className="tech-label">JavaScript</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs /><span className="tech-label">Node.js</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact /><span className="tech-label">React</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFastify /><span className="tech-label">Fastify 5</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit /><span className="tech-label">Git</span>
      </Col>
    </Row>
  );
}

export default Techstack;
