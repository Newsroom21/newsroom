import React, { useEffect, useState } from "react";
import "../style.scss";
import ReactHtmlParser from "html-react-parser";
import { useNavigate, NavLink } from "react-router-dom";
import bullet from "../../assets/bullet.png";


const FeaturesComponent = (props) => {
  // const [newsData, setNewsData] = useState([]);
  const [newsPostFeatures, setnewsPostFeatures] = useState([]);

  useEffect(() => {
    // setNewsData(props.allNewsData);

    var foundFeatures = [];
    foundFeatures = props.allNewsData.filter(
      (st) => st.newsCategory === "Features"
    );
    setnewsPostFeatures(foundFeatures);
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
              Features
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
            {newsPostFeatures.length > 0 && (
              <div className="newsGridContainer">
                {newsPostFeatures.slice(0, 6).map((newsPostFeatures, i) => (
                  <div style={{ borderBottom: `1px solid #ef1f1f` }} key={i}>
                    <div
                      onClick={() =>
                        navigateNews(`/news/${newsPostFeatures.newsId}`)
                      }
                    >
                      <div style={{ cursor: `pointer` }}>
                        <div className="clearfix">
                          <img
                            src={newsPostFeatures.newsImage}
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
                              {newsPostFeatures.updatedAt}
                            </p> */}
                            <p
                              className="titleHealth"
                              style={{ paddingRight: `20px` }}
                            >
                              {newsPostFeatures.newsHeadline}
                            </p>
                            <p
                              className="subContent"
                              style={{
                                marginTop: `20px`,
                                paddingRight: `20px`,
                              }}
                            >
                              {ReactHtmlParser(
                                newsPostFeatures.newsContent.length > 80
                                  ? `${newsPostFeatures.newsContent.substring(
                                      0,
                                      150
                                    )}...`
                                  : newsPostFeatures.newsContent
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

export default FeaturesComponent;
