import React, { useEffect, useState } from "react";
import "../style.scss";
import ReactHtmlParser from "html-react-parser";
import { useNavigate, NavLink } from "react-router-dom";
import bullet from "../../assets/bullet.png";


const UnTNComponent = (props) => {
  // const [newsData, setNewsData] = useState([]);
  const [newsPostPolitics, setNewsPostPolitics] = useState([]);

  useEffect(() => {
    // setNewsData(props.allNewsData);

    var foundPolitics = [];
    foundPolitics = props.allNewsData.filter(
      (st) => st.newsCategory === "Politics"
    );
    setNewsPostPolitics(foundPolitics);
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
            <img src={bullet} alt="img"/>
            <span style={{ fontSize: `24px`, fontWeight: `normal` }}>
              Unexplored TN
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
            {newsPostPolitics.length > 0 && (
              <div className="newsGridContainer">
                {newsPostPolitics.slice(0, 6).map((newsPostPolitics, i) => (
                  <div style={{ borderBottom: `1px solid #ef1f1f` }} key={i}>
                    <div
                      onClick={() =>
                        navigateNews(`/news/${newsPostPolitics.newsId}`)
                      }
                    >
                      <div style={{ cursor: `pointer` }}>
                        <div className="clearfix">
                          <img
                            src={newsPostPolitics.newsImage}
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
                              {newsPostPolitics.updatedAt}
                            </p> */}
                            <p
                              className="titleHealth"
                              style={{ paddingRight: `20px` }}
                            >
                              {newsPostPolitics.newsHeadline}
                            </p>
                            <p
                              className="subContent"
                              style={{
                                marginTop: `20px`,
                                paddingRight: `20px`,
                              }}
                            >
                              {ReactHtmlParser(
                                newsPostPolitics.newsContent.length > 80
                                  ? `${newsPostPolitics.newsContent.substring(
                                      0,
                                      150
                                    )}...`
                                  : newsPostPolitics.newsContent
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

export default UnTNComponent;
