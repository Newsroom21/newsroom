import React, { Suspense, useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/header";
import axios from "axios";
import Footer from "./components/footer";
import Lottie from "react-lottie";
import loaderData from "./components/loader.json";

const HomeComponent = React.lazy(() => import("./components/home-component"));
const SelectedNews = React.lazy(() => import("./components/selected-news"));
const TopStoryComponent = React.lazy(() =>
  import("./components/top-story-component")
);
const NewsRoomComponent = React.lazy(() =>
  import("./components/newsroom-component")
);
const PoliticsComponent = React.lazy(() =>
  import("./components/PoliticsComponent")
);
const FeaturesComponent = React.lazy(() =>
  import("./components/FeaturesComponent")
);
const CourtRoomComponent = React.lazy(() =>
  import("./components/CourtRoomComponent")
);
const UnTNComponent = React.lazy(() => import("./components/UnTNComponent"));
const EnvironmentComponent = React.lazy(() =>
  import("./components/EnvironmentComponent")
);
const ReportsComponent = React.lazy(() =>
  import("./components/ReportsComponent")
);
const ColumnsComponent = React.lazy(() =>
  import("./components/ColumnsComponent")
);
const VideosComponent = React.lazy(() =>
  import("./components/VideosComponent")
);

const override = `
  display: block;
  margin: 0 auto;
`;

function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loaderData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const [allNewsData, setAllNewsData] = useState([]);
  const url = "https://newsroom-backend.herokuapp.com/newsPortal";
  const WAIT_TIME = 500;

  useEffect(() => {
    const id = setInterval(() => {
      axios.get(url).then((response) => {
        // for (let i = 0; i < response.data.newsPortal.length; i++) {
        //   var dateobj = new Date(response.data.newsPortal[i].updatedAt);
        //   var dateobj1 = new Date(response.data.newsPortal[i].createdAt);

        //   var B = moment(dateobj).format("LLL");
        //   var B1 = moment(dateobj1).format("LLL");

        //   response.data.newsPortal[i].updatedAt = B;
        //   response.data.newsPortal[i].createdAt = B1;
        // }
        response.data.newsPortal.reverse();
        setAllNewsData(response.data.newsPortal);
      });
    }, WAIT_TIME);
    return () => clearInterval(id);
  }, [allNewsData]);

  return (
    <BrowserRouter>
      <Header />

      <div>
        <Suspense
          fallback={
            <div>
              <div>
                <Lottie
                  options={defaultOptions}
                  height={100}
                  width={100}
                  css={override}
                />
              </div>
            </div>
          }
        >
          <Routes>
            <Route
              path="/"
              element={<HomeComponent allNewsData={allNewsData} />}
            />
            <Route path="/news/:id" element={<SelectedNews />} />
            <Route
              path="/news/top-story"
              element={<TopStoryComponent allNewsData={allNewsData} />}
            />
            <Route
              path="/news/politics"
              element={<PoliticsComponent allNewsData={allNewsData} />}
            />
            <Route
              path="/news/features"
              element={<FeaturesComponent allNewsData={allNewsData} />}
            />
            <Route
              path="/news/courtRoom"
              element={<CourtRoomComponent allNewsData={allNewsData} />}
            />
            <Route
              path="/news/unexploredTN"
              element={<UnTNComponent allNewsData={allNewsData} />}
            />
            <Route
              path="/news/environment"
              element={<EnvironmentComponent allNewsData={allNewsData} />}
            />
            <Route
              path="/news/reports"
              element={<ReportsComponent allNewsData={allNewsData} />}
            />
            <Route
              path="/news/columns"
              element={<ColumnsComponent allNewsData={allNewsData} />}
            />
            <Route
              path="/news/videos"
              element={<VideosComponent allNewsData={allNewsData} />}
            />
          </Routes>
        </Suspense>
      </div>
      <div>
        <NewsRoomComponent />
      </div>
      <div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
