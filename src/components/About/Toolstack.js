import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiClickup,
  SiVisualstudiocode,
  SiPowerbi,
  SiMicrosoftexcel
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiClickup /><span className="tech-label">ClickUp</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode /><span className="tech-label">VS Code</span>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi /><span className="tech-label">Power BI</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftexcel /><span className="tech-label">Excel</span>
      </Col>

    </Row>
  );
}

export default Toolstack;
