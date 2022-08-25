import React from "react";
import "../style.scss";
import newsLogo from "../../assets/newsLogo.png";

const NewsRoomComponent = () => {
  return (
    <>
      <div className="containerDiv">
        <div className="homeMarginTop">
          <img src={newsLogo} width="200px" alt="logo" />
          <div id="divMarginNews">
            <div className="newsContainer">
              <div>
                <div className="newsroomTitle">My Account</div>
                <div style={{ marginTop: `20px` }}>
                  <div className="newsroomPara">
                    <a
                      rel="noreferrer"
                      href="https://www.w3schools.com/html/default.asp"
                      target="_blank"
                    >
                      Profile
                    </a>
                  </div>
                  <div className="newsroomPara">
                    <a
                      rel="noreferrer"
                      href="https://www.w3schools.com/html/default.asp"
                      target="_blank"
                    >
                      Newsletter
                    </a>
                  </div>
                  <div className="newsroomPara">
                    <a
                      rel="noreferrer"
                      href="https://www.w3schools.com/html/default.asp"
                      target="_blank"
                    >
                      About Membership
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div className="newsroomTitle">Connect with us</div>
                <div style={{ marginTop: `20px` }}>
                  <div className="newsroomPara">
                    <a
                      rel="noreferrer"
                      href="https://www.w3schools.com/html/default.asp"
                      target="_blank"
                    >
                      Facebook
                    </a>
                  </div>
                  <div className="newsroomPara">
                    <a
                      rel="noreferrer"
                      href="https://www.w3schools.com/html/default.asp"
                      target="_blank"
                    >
                      Instagram
                    </a>
                  </div>
                  <div className="newsroomPara">
                    <a
                      rel="noreferrer"
                      href="https://www.w3schools.com/html/default.asp"
                      target="_blank"
                    >
                      Twitter
                    </a>
                  </div>
                  <div className="newsroomPara">
                    <a
                      rel="noreferrer"
                      href="https://www.w3schools.com/html/default.asp"
                      target="_blank"
                    >
                      Youtube
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div className="newsroomTitle">About us</div>
                <div style={{ marginTop: `20px` }}>
                  <div className="newsroomPara">
                    <a
                      rel="noreferrer"
                      href="https://www.w3schools.com/html/default.asp"
                      target="_blank"
                    >
                      Reuse & permissions
                    </a>
                  </div>
                  <div className="newsroomPara">
                    <a
                      rel="noreferrer"
                      href="https://www.w3schools.com/html/default.asp"
                      target="_blank"
                    >
                      Terms of use
                    </a>
                  </div>
                  <div className="newsroomPara">
                    <a
                      rel="noreferrer"
                      href="https://www.w3schools.com/html/default.asp"
                      target="_blank"
                    >
                      Privacy policy
                    </a>
                  </div>
                  <div className="newsroomPara">
                    <a
                      rel="noreferrer"
                      href="https://www.w3schools.com/html/default.asp"
                      target="_blank"
                    >
                      Ad choices
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div className="newsroomTitle">Contact us</div>
                <div style={{ marginTop: `20px` }}>
                  <div className="newsroomPara">editor@thenewsroom.live</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsRoomComponent;
