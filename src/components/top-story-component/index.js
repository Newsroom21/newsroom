import React, { useEffect, useState } from "react";
import "../style.scss";
import ReactHtmlParser from "html-react-parser";
import { useNavigate, NavLink } from "react-router-dom";
import bullet from "../../assets/bullet.png";

const TopStoryComponent = (props) => {
  // const [newsData, setNewsData] = useState([]);
  const [newsPostTopStory, setNewsPostTopStory] = useState([]);

  useEffect(() => {
    // setNewsData(props.allNewsData);
    var foundTopStory = [];
    foundTopStory = props.allNewsData.filter(
      (st) => st.newsCategory === "Top Story"
    );
    setNewsPostTopStory(foundTopStory);
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
            <img src={bullet} alt="img" />

            <span style={{ fontSize: `24px`, fontWeight: `normal` }}>
              Top Story
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
            {newsPostTopStory.length > 0 && (
              <div className="newsGridContainer">
                {newsPostTopStory.slice(0, 6).map((newsPostTopStory, i) => (
                  <div style={{ borderBottom: `1px solid #ef1f1f` }} key={i}>
                    <div
                      onClick={() =>
                        navigateNews(`/news/${newsPostTopStory.newsId}`)
                      }
                    >
                      <div style={{ cursor: `pointer` }}>
                        <div className="clearfix">
                          <img
                            src={newsPostTopStory.newsImage}
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
                              {newsPostTopStory.updatedAt}
                            </p> */}
                            <p
                              className="titleHealth"
                              style={{ paddingRight: `20px` }}
                            >
                              {newsPostTopStory.newsHeadline}
                            </p>
                            <p
                              className="subContent"
                              style={{
                                marginTop: `20px`,
                                paddingRight: `20px`,
                              }}
                            >
                              {ReactHtmlParser(
                                newsPostTopStory.newsContent.length > 80
                                  ? `${newsPostTopStory.newsContent.substring(
                                      0,
                                      150
                                    )}...`
                                  : newsPostTopStory.newsContent
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

export default TopStoryComponent;
