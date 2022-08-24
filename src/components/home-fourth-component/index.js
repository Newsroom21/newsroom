import React, { useEffect, useState } from "react";
import "../style.scss";
import ReactHtmlParser from "html-react-parser";
import { useNavigate, NavLink } from "react-router-dom";
import bullet from "../../assets/bullet.png";

const HomeFourthComponent = (props) => {
  const [newsCourtroom, setnewsCourtroom] = useState([]);

  useEffect(() => {
    var foundCourtroom = [];
    foundCourtroom = props.newsData.filter(
      (st) => st.newsCategory === "Courtroom"
    );
    setnewsCourtroom(foundCourtroom);
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
            <img src={bullet} alt="bullet"/>
            <span style={{ fontSize: `24px`, fontWeight: `normal` }}>
              Courtroom
            </span>
            <NavLink to="/news/courtRoom" className="seeAll">
              See All
            </NavLink>
          </div>
        </div>
      </div>
      <div className="homeMarginTop">
        <div className="marginDiv">
          {newsCourtroom.length > 0 && (
            <div>
              <div
                className="posterGrid"
                style={{ cursor: `pointer` }}
                onClick={() => navigateNews(`/news/${newsCourtroom[0].newsId}`)}
              >
                <div>
                  <img
                    src={newsCourtroom[0].newsImage}
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
                    {newsCourtroom[0].newsHeadline}
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
                        newsCourtroom[0].newsContent.length > 80
                          ? `${newsCourtroom[0].newsContent.substring(
                              0,
                              150
                            )}...`
                          : newsCourtroom[0].newsContent
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
                    <span>{newsCourtroom[0].updatedAt}</span>
                  </p> */}
                </div>
              </div>
            </div>
          )}
        </div>
        <div>
          <div>
            {newsCourtroom.length > 0 && (
              <div className="newsGridContainer">
                {newsCourtroom.slice(1, 5).map((newsCourtroom, i) => (
                  <div
                    style={{ borderBottom: `1px solid #ef1f1f` }}
                    key={i}
                    onClick={() =>
                      navigateNews(`/news/${newsCourtroom.newsId}`)
                    }
                  >
                    <div>
                      <div
                        style={{ cursor: `pointer` }}
                        key={newsCourtroom._id}
                      >
                        <div className="clearfix">
                          <img
                            src={newsCourtroom.newsImage}
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
                              {newsCourtroom.updatedAt}
                            </p> */}
                            <p
                              className="titleHealth"
                              style={{ paddingRight: `20px` }}
                            >
                              {newsCourtroom.newsHeadline}
                            </p>
                            <p
                              className="subContent"
                              style={{
                                marginTop: `20px`,
                                paddingRight: `20px`,
                              }}
                            >
                              {ReactHtmlParser(
                                newsCourtroom.newsContent.length > 80
                                  ? `${newsCourtroom.newsContent.substring(
                                      0,
                                      150
                                    )}...`
                                  : newsCourtroom.newsContent
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

export default HomeFourthComponent;
