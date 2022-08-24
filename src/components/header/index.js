import React from "react";
import "../style.scss";
import "font-awesome/css/font-awesome.min.css";
import newsLogo from "../../assets/newsLogo.png";
// import DarkMode from "../../DarkMode";
import { NavLink } from "react-router-dom";

function Header() {
  // const weekday = [
  //   "Sunday",
  //   "Monday",
  //   "Tuesday",
  //   "Wednesday",
  //   "Thursday",
  //   "Friday",
  //   "Saturday",
  // ];
  // const current = new Date();
  // const year = `${current.getFullYear()}`;
  // const monthCurrent = current.toLocaleString("en-us", { month: "short" });
  // const dateToday = `${current.getDate()}`;
  // const dayToday = weekday[current.getDay()];

  // const scrollToBottom = () => {
  //   window.scrollTo({
  //     top: document.documentElement.scrollHeight,
  //     behavior: "smooth",
  //   });
  // };

  return (
    <>
      {" "}
      
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
