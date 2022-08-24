import React from "react";
import "../style.scss";
import "font-awesome/css/font-awesome.min.css";
import newsLogo from "../../assets/newsLogo.png";
// import DarkMode from "../../DarkMode";
import { NavLink } from "react-router-dom";

function Header() {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const current = new Date();
  const year = `${current.getFullYear()}`;
  const monthCurrent = current.toLocaleString("en-us", { month: "short" });
  const dateToday = `${current.getDate()}`;
  const dayToday = weekday[current.getDay()];

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      {" "}
      <div className="containerDiv">
        <div className="headerGridContainer">
          <div className="headerGridItem">
            <div
              style={{ float: `left`, marginBottom: `20px`, marginLeft: `5px` }}
            >
              {/* <DarkMode /> */}
            </div>
            <div>
              <div className="wrap">
                <div className="search">
                  {/* search with keywords for news regardless of dates they are posted */}
                  <input
                    type="text"
                    className="searchTerm"
                    placeholder="Search"
                  />
                  <button type="submit" className="searchButton">
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="headerGridItem">
            <div style={{ textAlign: `center` }}>
              {/* <NavLink to="/"> */}
                <img
                  src={newsLogo}
                  width="245px"
                  style={{ position: `relative`, bottom: `15px` }}
                />
              {/* </NavLink> */}
            </div>
          </div>
          <div className="headerGridItem" style={{ position: `relative` }}>
            <div style={{ float: `right` }}>
              <div>
                <button
                  className="button1"
                  disabled
                  style={{ cursor: `default` }}
                >
                  Login
                </button>
                {/* Login will lead to subscription where they can read freely */}
                <button
                  className="button1"
                  style={{ marginLeft: `20px`, cursor: `pointer` }}
                  onClick={scrollToBottom}
                >
                  Subscribe
                </button>
              </div>
              <div>
                <button
                  className="button2"
                  disabled
                  style={{ cursor: `default` }}
                >
                  Support our Journalism
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div id="secondHeader">
          {/* <div className="scrollmenu" style={{ textAlign: `center` }}>
            <NavLink to="/news/politics">Politics</NavLink>
            <NavLink to="/news/features">Features</NavLink>
            <NavLink to="/news/courtRoom">Courtroom</NavLink>
            <NavLink to="/news/unexploredTN">Unexplored TN</NavLink>
            <NavLink to="/news/environment">Environment</NavLink>
            <NavLink to="/news/reports">Investigative Reports</NavLink>
            <NavLink to="/news/columns">Columns</NavLink>
            <NavLink to="/news/videos">Entertainment</NavLink>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Header;
