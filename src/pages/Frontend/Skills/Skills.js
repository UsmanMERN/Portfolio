import React, { useEffect, useState } from "react";
import { frontendSkills, backendSkills } from "../../../utils/skillsData";

export default function Skills() {
  const [frontendExpanded, setFrontendExpanded] = useState(true);
  const [backendExpanded, setBackendExpanded] = useState(false);
  const [accordionState, setAccordionState] = useState("frontend");

  const toggleAccordion = (section) => {
    if (accordionState === section) {
      return;
    }
    setAccordionState(section);
  };

  const toggleFrontendAccordion = () => {
    setFrontendExpanded(!frontendExpanded);
    setBackendExpanded(false);
    toggleAccordion("frontend");
  };

  const toggleBackendAccordion = () => {
    setBackendExpanded(!backendExpanded);
    setFrontendExpanded(false);
    toggleAccordion("backend");
  };

  const updateExpandedState = () => {
    if (window.innerWidth > 992) {
      setFrontendExpanded(true);
      setBackendExpanded(true);
    } else {
      setFrontendExpanded(false);
      setBackendExpanded(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateExpandedState);
    updateExpandedState();
    return () => {
      window.removeEventListener("resize", updateExpandedState);
    };
  }, []);

  return (
    <div className="container">
      <h2 className="text-center mb-4 my-3">Skills Stack 🚀</h2>
      <p className="pb-3 text-center font-size-lg">
        Including Programming Languages, Frameworks, Databases, Frontend and
        Backend Tools, and APIs 🌐
      </p>
      <div className="row">
        <div className="col-6">
          <h3
            className={`text-center mb-4 hover-effect ${
              frontendExpanded ? "active" : ""
            }`}
            style={{ cursor: "pointer" }}
            onClick={toggleFrontendAccordion}
          >
            Frontend Tools
          </h3>
        </div>
        <div className="col-6">
          <h3
            className={`text-center mb-4 hover-effect ${
              backendExpanded ? "active" : ""
            }`}
            onClick={toggleBackendAccordion}
            style={{ cursor: "pointer" }}
          >
            Backend Tools
          </h3>
        </div>
      </div>

      <div className="row">
        <div className="co-12 col-md-12 col-lg-6">
          {accordionState === "frontend" || window.innerWidth > 992 ? (
            <ul className="list-unstyled text-center skill-badge--border p-3">
              {frontendSkills.map((skill, index) => (
                <li
                  key={index}
                  className={`skill-badge d-inline-block mb-3 mx-1 ${
                    frontendExpanded ? "" : ""
                  }`}
                >
                  <div className="py-2 px-3 d-flex align-items-center">
                    <i
                      className={skill.icon}
                      style={{ color: skill.color, fontSize: "24px" }}
                    ></i>
                    <span className="ms-1">{skill.name}</span>
                  </div>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <div className="co-12 col-md-12 col-lg-6">
          {accordionState === "backend" || window.innerWidth > 992 ? (
            <ul className="list-unstyled text-center skill-badge--border p-3">
              {backendSkills.map((skill, index) => (
                <li
                  key={index}
                  className={`skill-badge d-inline-block mb-3 mx-1 `}
                >
                  <div className="py-2 px-3 d-flex align-items-center">
                    <i
                      className={skill.icon}
                      style={{ color: skill.color, fontSize: "24px" }}
                    ></i>
                    <span className="ms-1">{skill.name}</span>
                  </div>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
}
