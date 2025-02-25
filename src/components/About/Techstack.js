import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { CgCloud } from "react-icons/cg";
import {
  DiGit,
  DiJava,
  DiJavascript1,
  DiJqueryLogo,
  DiNodejs,
  DiReact
} from "react-icons/di";
import { PiFileSqlDuotone } from "react-icons/pi";
import {
  SiDocker,
  SiMysql,
  SiPostgresql,
  SiSpring,
  SiSwagger,
  SiTypescript
} from "react-icons/si";

function Techstack() {
  const [hoveredTech, setHoveredTech] = useState(null);

  const techs = [
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <DiReact />, name: "React" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <DiJqueryLogo />, name: "jQuery" },
    { icon: <DiJava />, name: "Java" },
    { icon: <SiSpring />, name: "Spring" },
    { icon: <SiDocker />, name: "Docker" },
    { icon: <DiGit />, name: "Git" },
    { icon: <PiFileSqlDuotone />, name: "SQL" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <CgCloud />, name: "Cloud" },
    { icon: <SiSwagger />, name: "Swagger" }
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techs.map((tech, index) => (
        <Col
          key={index}
          xs={4} md={2}
          className="tech-icons"
          onMouseEnter={() => setHoveredTech(tech.name)}
          onMouseLeave={() => setHoveredTech(null)}
          style={{ position: "relative" }}
        >
          {tech.icon}
          {hoveredTech === tech.name && (
            <div className="tooltip" style={{
              position: "absolute",
              bottom: "100%",
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "rgba(0, 0, 0, 0.75)",
              color: "white",
              padding: "5px 10px",
              borderRadius: "5px",
              fontSize: "0.9rem",
              whiteSpace: "nowrap"
            }}>
              {tech.name}
            </div>
          )}
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
