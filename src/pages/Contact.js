import React from "react";
import Navigation from "../components/Navigation";
import InfoContact from "../components/InfoContact";
import CopyToClipboard from "react-copy-to-clipboard";
import { infoContactDate } from "../data/dataContact";

const Contact = () => {
  return (
    <div className="selectAllPage">
      <InfoContact />
      <div id="principal-page" className="contact-page">
        <header>
          <div className="full-nav">
            <h1>contact</h1>
            <Navigation />
          </div>
        </header>
        <main>
          <img src="img/rose.png" className="myPicture" alt="" />
          <p className="myName">quentin chéron</p>
          {infoContactDate.map((e) => {
            return (
              <div key={e.type}>
                <p className={e.type}>{e.type} :</p>
                <CopyToClipboard text={e.content}>
                  <p>{e.content}</p>
                </CopyToClipboard>
              </div>
            );
          })}
        </main>
      </div>
    </div>
  );
};

export default Contact;
