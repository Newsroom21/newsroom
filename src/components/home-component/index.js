import React, { useEffect, useState } from "react";
import "../style.scss";
import ad from "../../assets/ad.png";
import bullet from "../../assets/bullet.png";
import HomeSecondComponent from "../home-second-component";
import HomeThirdComponent from "../home-third-component";
import SubscribeComponent from "../subscribe-component";
import { useNavigate, NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeFourthComponent from "../home-fourth-component";

const HomeComponent = (props) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const [newsData, setNewsData] = useState([]);
  const [newsPost, setNewsPost] = useState([]);
  const [newsPostTopStory, setNewsPostTopStory] = useState([]);

  useEffect(() => {
    var newsCategory1;
    setNewsData(props.allNewsData);
    if ((newsCategory1 = "Breaking News")) {
      var found = [];
      found = props.allNewsData.filter(
        (st) => st.newsCategory === newsCategory1
      );
    }
    if ((newsCategory1 = "Top Story")) {
      var foundTopStory = [];
      foundTopStory = props.allNewsData.filter(
        (st) => st.newsCategory === newsCategory1
      );
    }

    setNewsPost(found);
    setNewsPostTopStory(foundTopStory);
    // console.log(props.allNewsData);
  }, [props.allNewsData]);

  const history = useNavigate();
  const navigateNews = (pathName) => {
    // console.log(pathName);
    history(pathName);
  };

  const renderSlides = () =>
    newsPost.slice(0, 5).map((newsPost) => (
      <div
        key={newsPost._id}
        onClick={() => navigateNews(`/news/${newsPost.newsId}`)}
      >
        <div>
          <p className="title">{newsPost.newsHeadline}</p>
          {/* <p className="subContent">
            Published: <span>{newsPost.createdAt}</span> | Last Updated:
            <span> {newsPost.updatedAt}</span>
          </p> */}
        </div>
        <img
          src={newsPost.newsImage}
          width="100%"
          height="400px"
          alt="img"
          // style={{ objectFit: `none` }}
        />
      </div>
    ));

  return (
    <>
      <div className="containerDiv">
        <div className="">
          <div className="homeMarginTop">
            <div className="home-grid-container">
              <div className="home-grid-div" style={{ cursor: `pointer` }}>
                <div className="subway-item">
                  <img src={bullet} alt="bullet"/>
                  <span>BREAKING NEWS</span>
                </div>
                <Slider {...settings}>{renderSlides()}</Slider>
              </div>
              <div className="home-grid-div">
                <div className="subway-item">
                  <img src={bullet} alt="bullet"/>
                  <span>TOP STORIES</span>
                </div>
                {newsPostTopStory.length > 0 && (
                  <div>
                    {newsPostTopStory.slice(0, 3).map((newsTopStory) => (
                      <div
                        style={{ cursor: `pointer` }}
                        key={newsTopStory._id}
                        onClick={() =>
                          navigateNews(`/news/${newsTopStory.newsId}`)
                        }
                      >
                        <p className="title">{newsTopStory.newsHeadline}</p>
                        {/* <p className="subContent">
                          <span>
                            {newsTopStory.newsAuthor}
                            <span
                              style={{ marginLeft: `5px`, marginRight: `5px` }}
                            >
                              -
                            </span>
                            {newsTopStory.updatedAt}
                          </span>
                        </p> */}
                        <hr />
                      </div>
                    ))}
                  </div>
                )}
                <NavLink
                  to="/news/top-story"
                  className="title"
                  style={{
                    color: `#ef1f1f`,
                    textDecoration: `underline`,
                    cursor: `pointer`,
                    position: `relative`,
                    top: `20px`,
                  }}
                >
                  more
                </NavLink>
              </div>
            </div>
          </div>
          <div style={{ textAlign: `center`, marginTop: `40px` }}>
            <img src={ad} width="80%" alt="img"/>
          </div>
        </div>

        <div>
          <HomeSecondComponent newsData={newsData} />
        </div>
        <div>
          <HomeThirdComponent newsData={newsData} />
        </div>
        <div>
          <HomeFourthComponent newsData={newsData} />
        </div>
      </div>
      <div>
        <SubscribeComponent />
      </div>
    </>
  );
};

export default HomeComponent;
