import React from "react";
import { Col, Row } from "react-bootstrap";

import {
  DiJavascript1,
  DiPython,
  DiNodejs,
  DiGit,
  DiSql,
  DiDax,
  DiPowerquery
} from "react-icons/di";
import {
  SiPostgresql,
  SiInformix,
  SiFigma,
  Sipowerbi,
  SiExcel
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiSql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDax />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPowerquery />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Sipowerbi />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiInformix />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExcel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
      </Col>
    </Row>
  );
}

export default Techstack;
