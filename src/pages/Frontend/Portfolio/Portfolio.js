import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { projectsData, buttonsData } from "../../../utils/projectsData";

const ProjectCard = ({
  title,
  description,
  Image,
  livePreview,
  githubLink,
  email,
  password,
}) => {
  return (
    <div className="col-12 col-md-6 col-lg-3 my-2">
      <div className="card shadow-lg">
        <motion.img
          whileHover={{ scale: 0.9 }}
          src={Image}
          className="card-img-top img-fluid p-1"
          style={{ height: "215px" }}
          alt={title}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <div className="d-flex justify-content-between align-items-center my-3">
            <p className="card-text mb-0">
              {description && description.length >= 10
                ? description.slice(0, 40) + "..."
                : description}
            </p>
          </div>
          {email && password && (
            <div className="mt-3">
              <p className="mb-0">Admin Email: {email}</p>
              <p>Password: {password}</p>
            </div>
          )}
          <div className="d-flex justify-content-around align-items-center my-3">
            <a
              href={livePreview}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none ms-2"
            >
              <motion.button
                className="btn btn-primary rounded-0 text-white"
                whileHover={{ scale: 0.93, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.9, transition: { duration: 0.5 } }}
              >
                Live Preview
              </motion.button>
            </a>
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none ms-2"
            >
              <motion.button
                className="btn btn-outline-primary rounded-0"
                whileHover={{ scale: 0.93, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.9, transition: { duration: 0.5 } }}
              >
                Source Code
              </motion.button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

function Portfolio() {
  const [selectedProjects, setSelectedProjects] = useState([]);

  useEffect(() => {
    setSelectedProjects(projectsData);
  }, []);

  const handleViewProjects = (filter) => {
    if (filter === "all") {
      setSelectedProjects(projectsData);
    } else {
      const filteredProjects = projectsData.filter(
        (project) => project.type === filter
      );
      setSelectedProjects(filteredProjects);
    }
  };

  return (
    <>
      <div className="container">
        <h2 className="text-center my-4">Portfolio 🎉</h2>
        <p className="text-center font-size-lg">my most recent work ✨</p>
        <div className="row justify-content-around">
          {buttonsData &&
            buttonsData.map((button, index) => (
              <div className="col-4 text-center" key={index}>
                <button
                  className="project-button"
                  onClick={() => handleViewProjects(button.filter)}
                >
                  {button.label}
                </button>
              </div>
            ))}
        </div>
        <div className="row mt-5">
          {selectedProjects &&
            selectedProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                Image={project.image}
                livePreview={project.livePreview}
                githubLink={project.githubLink}
                email={project.email}
                password={project.password}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default Portfolio;
