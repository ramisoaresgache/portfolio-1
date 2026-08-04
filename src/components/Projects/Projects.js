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
import municipalRevenuePipeline from "../../Assets/Projects/municipal-revenue-dashboard.png";
import nycTaxiLakehouse from "../../Assets/Projects/nyc-taxi-lakehouse-dashboard.png";

const dataProjects = [
  {
    imgPath: nycTaxiLakehouse,
    featured: true,
    category: "Data Engineering · Lakehouse · BI",
    title: "NYC Taxi Lakehouse Analytics",
    summary: "Lakehouse analítico que transforma viajes de taxi en métricas confiables de demanda, facturación y rendimiento operativo.",
    problem: "Los registros de viajes contenían observaciones inválidas y necesitaban una estructura confiable antes de poder analizar horarios, evolución y rutas.",
    solution: "Construí una arquitectura Medallion en Databricks con tablas Delta Bronze, Silver y Gold, validaciones de calidad, transformaciones con PySpark y SQL, y un dashboard AI/BI.",
    impact: "El pipeline procesó 21.932 registros, aisló 85 viajes inválidos y publicó métricas consistentes sobre 21.847 viajes para análisis ejecutivo.",
    technologies: ["Databricks", "PySpark", "Spark SQL", "Delta Lake", "Unity Catalog", "AI/BI Dashboards"],
    demoLink: "https://dbc-92f8da1e-68cc.cloud.databricks.com/dashboardsv3/01f19036f1b61434b7c805260d34e96c/published?o=7474652951142388",
  },
  {
    imgPath: municipalRevenuePipeline,
    featured: true,
    category: "Data Engineering · Forecasting · BI",
    title: "Pipeline ETL de Recaudación Municipal",
    summary: "Pipeline reproducible que transforma datos sintéticos de emisión, recaudación, deuda y cobrabilidad en información lista para analizar.",
    problem: "La información tributaria debía integrarse y validarse antes de poder analizar su evolución y proyectar la recaudación.",
    solution: "Construí un flujo ETL con controles de calidad, modelo dimensional, carga en base de datos, forecasting en Python y datasets para Power BI.",
    impact: "Un proceso completo, trazable y reproducible desde la ingesta hasta el dashboard, sin exponer información municipal real.",
    technologies: ["Python", "SQL", "ETL", "SQLite", "PostgreSQL", "Power BI"],
    ghLink: "https://github.com/ramisoaresgache/municipal-revenue-pipeline",
    demoLink: "https://mvl365-my.sharepoint.com/:u:/g/personal/ramiro_godino_vicentelopez_gov_ar/IQCIeo5ulbZ2R49SUsRtUbIDAQSZtD0KdRoecNbs1ALKuHo?e=AvExo2",
  },
  {
    imgPath: sistemaConsultas,
    confidential: true,
    category: "Data Engineering · Sistema interno",
    title: "Sistema de Estadísticas Municipal",
    summary: "Solución interna de datos y BI para centralizar análisis operativos de Hacienda sobre grandes volúmenes de información.",
    problem: "Los usuarios necesitaban consultar recaudación, tasas, deuda, cobrabilidad e inspecciones sin depender de procesos manuales dispersos.",
    solution: "Desarrollé pipelines ETL, consultas dinámicas y reportes automatizados sobre SQL e Informix, integrados en una aplicación web.",
    impact: "Centraliza información para aproximadamente 20 usuarios internos y mejora la disponibilidad de datos para análisis y decisiones.",
    technologies: ["Python", "SQL", "Informix", "ETL", "React", "Node.js"],
    ghLink: "https://github.com/ramisoaresgache/sistema_consutlas",
  },
  {
    imgPath: ecommerce,
    category: "Business Intelligence",
    title: "Dashboard de e-commerce",
    summary: "Tablero ejecutivo para analizar el desempeño financiero de tiendas online ubicadas en Brasil.",
    problem: "La facturación y los pedidos necesitaban una lectura consolidada por período, producto, tienda y ubicación.",
    solution: "Modelé los datos y diseñé un dashboard interactivo con indicadores financieros, filtros y análisis geográfico.",
    impact: "Facilita la comparación mensual y regional de facturación, pedidos y comisiones desde una única vista.",
    technologies: ["Power BI", "Power Query", "DAX", "Modelado de datos"],
    powerbiLink: "https://app.powerbi.com/groups/me/reports/6f9233aa-4222-4b70-abf4-5eada4453d36?ctid=4d5bce01-0858-4559-ab59-4a838e82866b&pbi_source=linkShare",
  },
  {
    imgPath: accidentedetransito,
    category: "Business Intelligence",
    title: "Accidentes de tránsito",
    summary: "Dashboard para explorar accidentes registrados en carreteras federales de Brasil.",
    problem: "El volumen de eventos dificultaba reconocer rápidamente patrones por estado, horario, causa y nivel de gravedad.",
    solution: "Organicé los datos en indicadores, series temporales, comparaciones por categoría y una visualización geográfica interactiva.",
    impact: "Permite identificar concentraciones, horarios críticos y causas frecuentes para orientar el análisis preventivo.",
    technologies: ["Power BI", "Power Query", "DAX", "Mapas"],
    powerbiLink: "https://app.powerbi.com/groups/me/reports/74682954-d5c7-45a2-bea1-4a5c5b60f55a?ctid=4d5bce01-0858-4559-ab59-4a838e82866b&pbi_source=linkShare&bookmarkGuid=01c4d32f-b3ab-4327-8e6f-b3eba0c696ef",
  },
  {
    imgPath: atencionalcliente,
    category: "Business Intelligence",
    title: "Atención al cliente",
    summary: "Dashboard operativo para monitorear la atención al cliente y el rendimiento del servicio.",
    problem: "La operación necesitaba relacionar volumen de llamadas, tiempos de atención, satisfacción y distribución por área.",
    solution: "Diseñé un tablero con KPIs, filtros temporales y análisis por agente, estado, fecha y sector responsable.",
    impact: "Concentra los principales indicadores del servicio y permite detectar demoras, cargas de trabajo y oportunidades de mejora.",
    technologies: ["Power BI", "Power Query", "DAX", "KPIs"],
    powerbiLink: "https://app.powerbi.com/groups/me/reports/b2f034f3-2ca7-4a01-b657-a0548f98a767?ctid=4d5bce01-0858-4559-ab59-4a838e82866b&pbi_source=linkShare",
  },
];

const developmentProjects = [
  {
    imgPath: vibe,
    category: "Desarrollo Full Stack",
    title: "Vibe",
    summary: "E-commerce completo desarrollado como proyecto final grupal durante mi formación en Henry.",
    problem: "Construir una experiencia de compra que integrara catálogo, búsqueda, usuarios, administración y pagos en una única aplicación.",
    solution: "Implementamos un frontend con React y Redux, una API en Node.js y persistencia en PostgreSQL.",
    impact: "Producto funcional de punta a punta con filtros, autenticación, gestión de productos y pasarela de pagos.",
    technologies: ["JavaScript", "React", "Redux", "Node.js", "PostgreSQL"],
    ghLink: "https://github.com/ramisoaresgache/VIBE",
    demoLink: "https://proyecto-final-vibes.vercel.app/",
  },
  {
    imgPath: pokemon,
    category: "Desarrollo Full Stack",
    title: "Pokedex",
    summary: "Aplicación web para explorar información de Pokémon y administrar registros personalizados.",
    problem: "Integrar datos provenientes de una API externa con información creada y almacenada por el usuario.",
    solution: "Desarrollé una aplicación con React, Redux, Node.js y PostgreSQL con búsquedas, filtros, creación y vistas de detalle.",
    impact: "Unificó datos externos y propios en una experiencia navegable, aplicando arquitectura frontend, backend y base de datos.",
    technologies: ["JavaScript", "React", "Redux", "Node.js", "PostgreSQL"],
    ghLink: "https://github.com/ramisoaresgache/PokemonPI/tree/master",
  },
];

function renderProject(project) {
  return (
    <Col key={project.title} md={6} lg={4} className="project-card">
      <ProjectCard {...project} isBlog={false} />
    </Col>
  );
}

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Trabajos <strong className="purple">Realizados</strong>
        </h1>
        <p style={{ color: "white" }}>
          Casos de ingeniería de datos, automatización, Business Intelligence y desarrollo web.
          Cada proyecto está presentado desde el problema hasta el impacto generado.
        </p>
        <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "0.92rem" }}>
          Los proyectos municipales protegen datos y código sensibles; se muestran mediante
          versiones sintéticas o descripciones funcionales.
        </p>

        <h2 className="project-group-heading">
          Data Engineering &amp; Business Intelligence
        </h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {dataProjects.map(renderProject)}
        </Row>

        <div className="project-secondary-heading">
          <h2>Otros proyectos de desarrollo</h2>
          <p>
            Aplicaciones full stack que complementan mi perfil técnico y experiencia construyendo
            productos de punta a punta.
          </p>
        </div>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {developmentProjects.map(renderProject)}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
