import React, { Component } from "react";
import ProgressBar from "react-animated-progress-bar";
import { KnowledgeData } from "../../data/resume/knowledges";

export default class Langages extends Component {
  state = {
    years: 4,
    knowledgesData: KnowledgeData,
  };

  render() {
    const {
      langages,
      framework,
      cms,
      otherKnowledges,
      academicLanguage,
      capacityAcademic,
      certification,
    } = this.state.knowledgesData;
    let totalYears = [];
    for (let i = 0; i < this.state.years + 1; i++) {
      totalYears.push(
        <p
          className="years"
          style={{ width: this.state.years * 5 + "%" }}
          key={i}
        >
          {i > 1 ? i + "ans" : i + "an"}
        </p>
      );
    }

    return (
      <div className="knowledges">
        <h3>Langages</h3>
        <div className="allWithoutAcademic">
          <div className="totalYears">{totalYears}</div>
          <div className="langages">
            <ul>
              {langages.map((item) => {
                return (
                  <li key={item.type} className="groupKnowledges">
                    <h4>{item.type}</h4>
                    <ProgressBar
                      width={item.experience * this.state.years * 4.2 + "%"}
                      height="3px"
                      rect
                      percentage="100"
                      rectBorderRadius="20px"
                      defColor={{
                        excellent: "#f8b901",
                      }}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="framework">
            <h3>Framework</h3>
            <ul>
              {framework.map((item) => {
                return (
                  <li key={item.type} className="groupKnowledges">
                    <h4>{item.type}</h4>
                    <ProgressBar
                      width={item.experience * this.state.years * 4.2 + "%"}
                      height="3px"
                      rect
                      percentage="100"
                      rectBorderRadius="20px"
                      defColor={{
                        excellent: "#f8b901",
                      }}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="cms">
            <h3>Cms</h3>
            <ul>
              {cms.map((item) => {
                return (
                  <li key={item.type} className="groupKnowledges">
                    <h4>{item.type}</h4>
                    <ProgressBar
                      width={item.experience * this.state.years * 4.2 + "%"}
                      height="3px"
                      rect
                      percentage="100"
                      rectBorderRadius="20px"
                      defColor={{
                        excellent: "#f8b901",
                      }}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="otherKnowledges">
            <h3>Autres compétences</h3>
            <ul>
              {otherKnowledges.map((item) => {
                return (
                  <li key={item.type} className="groupKnowledges">
                    <h4>{item.type}</h4>
                    <ProgressBar
                      width={item.experience * this.state.years * 4.2 + "%"}
                      height="3px"
                      rect
                      percentage="100"
                      rectBorderRadius="20px"
                      defColor={{
                        excellent: "#f8b901",
                      }}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="academicLanguage">
          <h3>Compétence académique</h3>
          <div>
            {academicLanguage.map((item) => {
              return (
                <div key={item.type}>
                  <h4 key="title">{item.type}</h4>
                  <ProgressBar
                    width={item.experience * this.state.years * 4.2 + "%"}
                    height="3px"
                    rect
                    percentage="100"
                    rectBorderRadius="20px"
                    defColor={{
                      excellent: "#f8b901",
                    }}
                  />

                  <ul>
                    {capacityAcademic.map((e) => {
                      return <li key={e}>{e}</li>;
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        <div className="certification">
          <h3>Diplôme</h3>
          <ul>
            {certification.map((item) => {
              return (
                <li key={item}>
                  {item}
                  <img src="img/icons/checkbox.png" alt="" />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
