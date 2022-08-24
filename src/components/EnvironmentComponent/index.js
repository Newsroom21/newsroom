import React, { useEffect, useState } from "react";
import "../style.scss";
import ReactHtmlParser from "html-react-parser";
import { useNavigate, NavLink } from "react-router-dom";
import bullet from "../../assets/bullet.png";

const EnvironmentComponent = (props) => {
  // const [newsData, setNewsData] = useState([]);
  const [newsPostCourt, setnewsPostCourt] = useState([]);

  useEffect(() => {
    // setNewsData(props.allNewsData);

    var foundCourt = [];
    foundCourt = props.allNewsData.filter(
      (st) => st.newsCategory === "Courtroom"
    );
    setnewsPostCourt(foundCourt);
  }, [props.allNewsData]);

  const history = useNavigate();
  const navigateNews = (pathName) => {
    history(pathName);
  };

  return (
    <>
      <div style={{ marginTop: `40px` }} className="containerDiv">
        <div className="borderDiv">
          <div
            className="subway-item marginBar"
            style={{ padding: `20px 0px` }}
          >
            <img src={bullet} alt="bullet"/>
            <span style={{ fontSize: `24px`, fontWeight: `normal` }}>
              Environment
            </span>
            <NavLink to="/" className="seeAll">
              Home
            </NavLink>
          </div>
        </div>
      </div>
      <div className="containerDiv">
        <div className="homeMarginTop">
          <div>
            {newsPostCourt.length > 0 && (
              <div className="newsGridContainer">
                {newsPostCourt.slice(0, 6).map((newsPostCourt, i) => (
                  <div style={{ borderBottom: `1px solid #ef1f1f` }} key={i}>
                    <div
                      onClick={() =>
                        navigateNews(`/news/${newsPostCourt.newsId}`)
                      }
                    >
                      <div style={{ cursor: `pointer` }}>
                        <div className="clearfix">
                          <img
                            src={newsPostCourt.newsImage}
                            className="img2"
                            style={{
                              objectFit: `none`,
                              marginLeft: `20px`,
                              marginBottom: `10px`,
                            }}
                            width="200"
                            height="200"
                            alt="img"
                          />
                          <div>
                            {/* <p className="subContentHealth">
                              {newsPostCourt.updatedAt}
                            </p> */}
                            <p
                              className="titleHealth"
                              style={{ paddingRight: `20px` }}
                            >
                              {newsPostCourt.newsHeadline}
                            </p>
                            <p
                              className="subContent"
                              style={{
                                marginTop: `20px`,
                                paddingRight: `20px`,
                              }}
                            >
                              {ReactHtmlParser(
                                newsPostCourt.newsContent.length > 80
                                  ? `${newsPostCourt.newsContent.substring(
                                      0,
                                      150
                                    )}...`
                                  : newsPostCourt.newsContent
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default EnvironmentComponent;
