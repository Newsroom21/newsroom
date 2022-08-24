import React, { useEffect, useState } from "react";
import "../style.scss";
import ReactHtmlParser from "html-react-parser";
import { NavLink, useNavigate } from "react-router-dom";
import bullet from "../../assets/bullet.png";


const HomeSecondComponent = (props) => {
  const [newsPolitics, setnewsPolitics] = useState([]);

  useEffect(() => {
    var foundPolitics = [];
    foundPolitics = props.newsData.filter(
      (st) => st.newsCategory === "Politics"
    );
    setnewsPolitics(foundPolitics);
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
              Politics
            </span>
            <NavLink to="/news/politics" className="seeAll">
              See All
            </NavLink>
          </div>
        </div>
      </div>
      <div className="homeMarginTop">
        <div className="marginDiv">
          {newsPolitics.length > 0 && (
            <div>
              <div
                className="posterGrid"
                style={{ cursor: `pointer` }}
                onClick={() => navigateNews(`/news/${newsPolitics[0].newsId}`)}
              >
                <div>
                  <img
                    src={newsPolitics[0].newsImage}
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
                    {newsPolitics[0].newsHeadline}
                  </p>
                  <p
                    className="subContent"
                    style={{
                      color: `#ffffff`,
                      position: `relative`,
                      top: `30px`,
                    }}
                  >
                    {ReactHtmlParser(
                      newsPolitics[0].newsContent.length > 80
                        ? `${newsPolitics[0].newsContent.substring(0, 150)}...`
                        : newsPolitics[0].newsContent
                    )}
                  </p>
                  {/* <p
                    className="subContent"
                    style={{
                      color: `#ffffff`,
                      position: `relative`,
                      top: `40px`,
                    }}
                  >
                    {newsPolitics[0].updatedAt}
                  </p> */}
                </div>
              </div>
            </div>
          )}
        </div>
        <div>
          <div>
            {newsPolitics.length > 0 && (
              <div className="newsGridContainer">
                {newsPolitics.slice(1, 5).map((newsPolitics, i) => (
                  <div
                    style={{ borderBottom: `1px solid #ef1f1f` }}
                    key={i}
                    onClick={() => navigateNews(`/news/${newsPolitics.newsId}`)}
                  >
                    <div>
                      <div style={{ cursor: `pointer` }}>
                        <div className="clearfix">
                          <img
                            src={newsPolitics.newsImage}
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
                              {newsPolitics.updatedAt}
                            </p> */}
                            <p
                              className="titleHealth"
                              style={{ paddingRight: `20px` }}
                            >
                              {newsPolitics.newsHeadline}
                            </p>
                            <p
                              className="subContent"
                              style={{
                                marginTop: `20px`,
                                paddingRight: `20px`,
                              }}
                            >
                              {ReactHtmlParser(
                                newsPolitics.newsContent.length > 80
                                  ? `${newsPolitics.newsContent.substring(
                                      0,
                                      150
                                    )}...`
                                  : newsPolitics.newsContent
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
