import React, { Component } from "react";
import { evolutionData } from "../../data/resume/evolution";

export default class Evolution extends Component {
  state = {
    data: evolutionData,
  };
  render() {
    const { data } = this.state;
    return (
      <div className="evolution">
        {data.map((item) => {
          return (
            <div key={item.id}>
              <p className="circle">{item.date}</p>
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
