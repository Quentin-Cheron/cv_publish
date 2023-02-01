import React from "react";
import Navigation from "../components/Navigation";
import InfoContact from "../components/InfoContact";
import { dataPassion } from "../data/dataAboutMe";

const QuiSuisJe = () => {
  return (
    <div className="selectAllPage about-me">
      <InfoContact />
      <div id="principal-page">
        <header>
          <div className="full-nav">
            <h1>Qui suis-je ?</h1>
            <Navigation />
          </div>
        </header>
        <main>
          <p className="moreInfoAboutMe">
           Je suis un étudiant en Développement web pour la création de site web Desktop / Mobile, j'ai commencé à l'âge de 15 ans, en rentrant dans l'école Eden School, j'y suis depuis 3 ans maintenant et je compte continuer encore longtemps, possédant un Brevet et bientôt le permis de conduire.
          </p>
          <h2>Quelles sont mes passions ?</h2>

          <div className="group-passion">
            {dataPassion.map((e) => {
              return (
                <div key={e.id} className="content-passion">
                  <img src={e.icon} alt="" />
                  <div>
                    <h3>{e.title}</h3>
                    <p>{e.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
};

export default QuiSuisJe;
