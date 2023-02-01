import React, { Component } from "react";
import Card from "./Card";
import { cardData } from "../data/portfolioData";

export default class allCard extends Component {
  state = {
    radios: [
      { id: 1, languages: "Php" },
      { id: 2, languages: "React" },
      { id: 3, languages: "Css" },
      { id: 4, languages: "Javascript" },
    ],
    selectedRadio: "",
    showAll: true,
  };
  handlerClick = (event) => {
    this.setState({ selectedRadio: event.target.id });
  };
  changeShowAllInput = () => {
    this.setState({ showAll: false });
  };
  changeShowAll = () => {
    this.setState({ showAll: true });
  };
  render() {
    const { selectedRadio, radios, showAll } = this.state;
    return (
      <div>
        <div>
          <form className="allFilter">
            {radios.map((e) => {
              return (
                <div key={e.id}>
                  <label htmlFor={e.languages}>{e.languages}</label>
                  <input
                    type="radio"
                    id={e.languages}
                    name="check"
                    onChange={this.handlerClick}
                    onClick={this.changeShowAllInput}
                    checked={!showAll && e.languages == selectedRadio}
                  />
                </div>
              );
            })}
          </form>
          <button onClick={this.changeShowAll}>tout afficher</button>
        </div>
        <div className="allCard">
          {cardData
            .filter((item) => item.languages.includes(selectedRadio) || showAll)
            .map((item) => {
              return <Card key={item.id} item={item} />;
            })}
        </div>
      </div>
    );
  }
}
