import React, { Component } from "react";
import Navigation from "../components/Navigation";
import InfoContact from "../components/InfoContact";
import Evolution from "../components/resume/Evolution";
import Langages from "../components/resume/Langages";

export default class Resume extends Component {
  render() {
    return (
      <div className="selectAllPage">
        <InfoContact />
        <div id="principal-page" className="resume-page">
          <header>
            <div className="full-nav">
              <h1>resume</h1>
              <Navigation />
            </div>
          </header>
          <main>
            <p className="info">
            Je suis entrée à Eden School et j'ai pu toucher pour la première fois une ligne de code en HTML 5 et CSS 3, commençant par des petits sites basics jusqu'à savoir faire de vrais sites usant de base de données MySql et Php, traitement de formulaire et bien plus. Ayant plus de 3000h de code HTML CSS Javascript Php Sass Sql.
            </p>
            <h2>Mon Évolution</h2>
            <Evolution />
            <h2>Mes compétences</h2>
            {<Langages />}
          </main>
        </div>
      </div>
    );
  }
}
