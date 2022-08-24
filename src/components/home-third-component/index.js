import React, { useEffect, useState } from "react";
import "../style.scss";
import ReactHtmlParser from "html-react-parser";
import { useNavigate, NavLink } from "react-router-dom";
import bullet from "../../assets/bullet.png";

const HomeSecondComponent = (props) => {
  const [newsFeatures, setnewsFeatures] = useState([]);

  useEffect(() => {
    var foundFeatures = [];
    foundFeatures = props.newsData.filter(
      (st) => st.newsCategory === "Features"
    );
    setnewsFeatures(foundFeatures);
  }, [props.newsData]);

  const history = useNavigate();
  const navigateNews = (pathName) => {
    history(pathName);
  };

  return (
    <>
      <div style={{ marginTop: `40px` }}>
        <div className="borderDiv">
          <div
            className="subway-item marginBar"
            style={{ padding: `20px 0px` }}
          >
            <img src={bullet} alt="img"/>

            <span style={{ fontSize: `24px`, fontWeight: `normal` }}>
              Features
            </span>
            <NavLink to="/news/features" className="seeAll">
              See All
            </NavLink>
          </div>
        </div>
      </div>
      <div className="homeMarginTop">
        <div className="marginDiv">
          {newsFeatures.length > 0 && (
            <div>
              <div
                className="posterGrid"
                style={{ cursor: `pointer` }}
                onClick={() => navigateNews(`/news/${newsFeatures[0].newsId}`)}
              >
                <div>
                  <img
                    src={newsFeatures[0].newsImage}
                    width="100%"
                    height="400px"
                    alt="img"
                  />
                </div>
                <div
                  style={{
                    background: `#ef1f1f`,
                    height: `84.3%`,
                    padding: `30px`,
                  }}
                >
                  <p className="title" style={{ color: `#ffffff` }}>
                    {newsFeatures[0].newsHeadline}
                  </p>
                  <p
                    className="subContent"
                    style={{
                      color: `#ffffff`,
                      position: `relative`,
                      top: `30px`,
                    }}
                  >
                    <span>
                      {ReactHtmlParser(
                        newsFeatures[0].newsContent.length > 80
                          ? `${newsFeatures[0].newsContent.substring(
                              0,
                              150
                            )}...`
                          : newsFeatures[0].newsContent
                      )}
                    </span>
                  </p>
                  {/* <p
                    className="subContent"
                    style={{
                      color: `#ffffff`,
                      position: `relative`,
                      top: `40px`,
                    }}
                  >
                    <span>{newsFeatures[0].updatedAt}</span>
                  </p> */}
                </div>
              </div>
            </div>
          )}
        </div>
        <div>
          <div>
            {newsFeatures.length > 0 && (
              <div className="newsGridContainer">
                {newsFeatures.slice(1, 5).map((newsFeatures, i) => (
                  <div
                    style={{ borderBottom: `1px solid #ef1f1f` }}
                    key={i}
                    onClick={() => navigateNews(`/news/${newsFeatures.newsId}`)}
                  >
                    <div>
                      <div style={{ cursor: `pointer` }}>
                        <div className="clearfix">
                          <img
                            src={newsFeatures.newsImage}
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
                              {newsFeatures.updatedAt}
                            </p> */}
                            <p
                              className="titleHealth"
                              style={{ paddingRight: `20px` }}
                            >
                              {newsFeatures.newsHeadline}
                            </p>
                            <p
                              className="subContent"
                              style={{
                                marginTop: `20px`,
                                paddingRight: `20px`,
                              }}
                            >
                              {ReactHtmlParser(
                                newsFeatures.newsContent.length > 80
                                  ? `${newsFeatures.newsContent.substring(
                                      0,
                                      150
                                    )}...`
                                  : newsFeatures.newsContent
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

export default HomeSecondComponent;
