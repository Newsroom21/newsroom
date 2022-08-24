import React, { useState, useEffect } from "react";
import "../style.scss";
import { useLocation, NavLink } from "react-router-dom";
import axios from "axios";
import moment from "moment";


const SelectedNews = () => {
  const location = useLocation();
  const [selectedNews, setSelectedNews] = useState([]);
  useEffect(() => {
    const path = location.pathname.split("/")[2];
    axios
      .get("https://newsroom-backend.herokuapp.com/newsPortal")
      .then((response) => {
        for (let i = 0; i < response.data.newsPortal.length; i++) {
          var dateobj = new Date(response.data.newsPortal[i].updatedAt);
          var dateobj1 = new Date(response.data.newsPortal[i].createdAt);

          var B = moment(dateobj).format("LLL");
          var B1 = moment(dateobj1).format("LLL");

          response.data.newsPortal[i].updatedAt = B;
          response.data.newsPortal[i].createdAt = B1;
        }
        const requiredpost = response.data.newsPortal.find(
          (news) => news.newsId === path
        );

        // console.log(requiredpost);
        setSelectedNews([requiredpost]);
      });
  }, [location.pathname]);

  return (
    <>
      <div style={{ marginTop: `40px` }} className="containerDiv">
        <div className="borderDiv">
          <div
            className="subway-item marginBar"
            style={{ padding: `30px 0px` }}
          >
            <NavLink
              to="/"
              className="seeAll"
              style={{ position: `relative`, bottom: `15px` }}
            >
              Home
            </NavLink>
          </div>
        </div>
      </div>
      <div>
        <div className="containerDiv">
          {selectedNews.map((selectedNews, index) => (
            <div className="" key={index}>
              <div className="homeMarginTop">
                <div style={{ marginLeft: `20px`, marginRight: `20px` }}>
                  <p className="selectedTitle">{selectedNews.newsHeadline}</p>
                </div>
                <img src={selectedNews.newsImage} width="100%" height="700px" alt="img"/>
                <div style={{ marginLeft: `20px`, marginRight: `20px` }}>
                  <p className="selectedTitle1">
                    By: {selectedNews.newsAuthor}, {selectedNews.updatedAt}
                  </p>
                  <p
                    className="selectedPara"
                    dangerouslySetInnerHTML={{
                      __html: selectedNews.newsContent,
                    }}
                  ></p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <hr className="hrclass" />
      </div>
    </>
  );
};

export default SelectedNews;
