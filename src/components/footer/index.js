import React from "react";
import "../style.scss";

const Footer = () => {
  return (
    <>
      <div style={{ marginTop: `40px` }}>
        <div className="borderDivLast">
          <div className="containerDiv">
            <span className="para">All rights reserved. Copyrights 2022</span>
            <span className="para" style={{ float: `right` }}>
              THE NEWSROOM, TAMIL NADU
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
