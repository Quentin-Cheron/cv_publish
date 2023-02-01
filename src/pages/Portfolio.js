import React from "react";
import Navigation from "../components/Navigation";
import InfoContact from "../components/InfoContact";
import AllCard from "../components/AllCard";

const Portfolio = () => {
  return (
    <div className="selectAllPage">
      <InfoContact />
      <div id="principal-page" className="portfolio-page">
        <header>
          <div className="full-nav">
            <h1>portfolio</h1>
            <Navigation />
          </div>
        </header>
        <main>
          <h2>Quels sont les projets que j’ai réalisés ?</h2>
          {<AllCard />}
        </main>
      </div>
      <div className="bg"></div>
    </div>
  );
};

export default Portfolio;
