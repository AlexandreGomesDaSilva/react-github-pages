import React from "react";
import "./Project.scss";
import { Link } from "react-router-dom";

const Project = ({ project }) => {
  return (
    <div className="project">
      <div className="project-image">
        <img
          src={`${process.env.PUBLIC_URL}${project.image}`}
          alt={project.titre}
        />
      </div>
      <div className="project-content">
        <h3>{project.titre}</h3>
        <p>{project.description}</p>
        <div className="skills">
          <h4>Compétences mise en avant :</h4>
          {project.skills.map((skills, index) => (
            <span key={index}>{skills}</span>
          ))}
        </div>
        <Link
          to={`${project.repository}`}
          className="project-link"
          target="_blank"
        >
          Lien vers le projet
        </Link>
      </div>
    </div>
  );
};

export default Project;
