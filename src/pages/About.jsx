import React from "react";
import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <div className="about-my-picture">
        <img src={`${process.env.PUBLIC_URL}/images/moi.png`} alt="Moi" />
      </div>
      <div className="about-my-content">
        <h3>À propos</h3>
        <p>
          Depuis tout petit, j’ai toujours été fasciné par l’univers du web : je
          passais des heures à jouer à des jeux vidéo en ligne, à explorer des
          sites, à tester des applications. Cette curiosité m’a peu à peu amené
          à m’interroger sur ce qui se cache derrière les écrans, sur la manière
          dont tout ça fonctionne.
        </p>
        <p>
          Naturellement que je me suis tourné vers des études en marketing, avec
          une appétence particulière pour le marketing digital et opérationnel.
          Comprendre les besoins des utilisateurs, analyser leurs comportements
          et concevoir des stratégies pour y répondre sont des choses qui m’ont
          toujours stimulé.
        </p>
        <p>
          C’est en fin de master, lors d’un cours où il fallait créer un site
          web, que j’ai eu un vrai déclic. J’ai adoré ça. J’ai compris à ce
          moment-là que le développement web et le marketing formaient un duo
          puissant et complémentaire. Depuis, je me suis lancé à fond pour
          monter en compétences en développement.
        </p>
        <p>
          Aujourd’hui, mon objectif est clair : créer des sites web accessibles,
          intuitifs, et esthétiques. À long terme, j’aimerais devenir un expert
          dans la gamification des sites — pour rendre l’expérience utilisateur
          plus engageante, plus vivante, et surtout plus mémorable.
        </p>
      </div>
    </div>
  );
};

export default About;
