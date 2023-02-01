import React, { Component, useRef, useEffect } from "react";

export default class card extends Component {
  state = {
    showInfo: false,
    top: 0,
    left: 0,
    bodyOverflow: true,
    bodyBackgroundColor: true,
    position: true,
    width: true,
    height: true,
    backgroundColor: true,
    opacity: true,
  };
  moreInfo = () => {
    this.setState({ showInfo: !this.state.showInfo });
  };
  changeStyleBody = () => {
    this.setState({
      bodyOverflow: !this.state.bodyOverflow,
      bodyBackgroundColor: !this.state.bodyBackgroundColor,
    });
    console.log(this.state.bodyOverflow);
  };

  changeBgStyle = () => {
    if (this.state.showInfo) {
      
    }
  };

  render() {
    document.body.style.overflow = this.state.bodyOverflow
      ? "visible"
      : "hidden";

    const { title, text, imgSrc, iconSrc, sourceCode } = this.props.item;
    return (
      <div className="card">
        <h3>{title}</h3>
        <div className="icons">
          {iconSrc.map((e) => {
            return <img key={e} src={e} alt="" />;
          })}
        </div>
        <img src={imgSrc} className="imgProject" alt="" />
        <img
          src="img/icons/checked.png"
          className="check"
          alt=""
          onClick={() => {
            this.moreInfo();
            this.changeStyleBody();
          }}
        />
        {this.state.showInfo && (
          <div
            className="showInfo"
            style={{ top: document.defaultView.pageYOffset + 100 }}
          >
            <img
              src="img/icons/checked.png"
              alt=""
              onClick={() => {
                this.moreInfo();
                this.changeStyleBody();
              }}
            />
            <h3>{title}</h3>
            <p>{text}</p>
            <a href={sourceCode} target="_blank">
              Code source
            </a>
          </div>
        )}
      </div>
    );
  }
}
