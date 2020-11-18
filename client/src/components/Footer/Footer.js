import React from "react";

import Icon from "../Icon/Icon";

const Footer = () => (
  <footer className="footer">
    {/* <div className="footer__left">
      <TextButton bold small darkBlue>
        ABOUT
      </TextButton>
      <TextButton bold small darkBlue>
        HELP
      </TextButton>
      <TextButton bold small darkBlue>
        PRESS
      </TextButton>
      <TextButton bold small darkBlue>
        API
      </TextButton>
      <TextButton bold small darkBlue>
        JOBS
      </TextButton>
      <TextButton bold small darkBlue>
        PRIVACY
      </TextButton>
      <TextButton bold small darkBlue>
        TERMS
      </TextButton>
    </div> */}
    <div className="footer__right">
      <h4
        className="heading-4 color-black font-bold"
        style={{ display: "flex", alignItems: "center" }}
      >
        MADE WITH
        <Icon
          className="icon--small color-red"
          icon="heart"
          style={{ display: "inline-block", margin: "0 5px" }}
        />{" "}
        by DeMarco, Ari, Tia, and Chidinma
      </h4>
    </div>
  </footer>
);

export default Footer;
