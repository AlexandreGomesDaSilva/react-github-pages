// @ts-nocheck
import React, { useEffect, useState } from "react";
import Project from "../components/Project/Project";
import "./Home.scss";

const Home = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data/projects.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="home">
      <h2>Réalisations</h2>
      <div className="projects-list">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Home;
