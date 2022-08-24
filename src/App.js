import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import Header from "./components/header";
// import Header from "./components/header";

function App() {
  const [allNewsData, setAllNewsData] = useState([]);
  const url = "https://newsroom-backend.herokuapp.com/newsPortal";
  const WAIT_TIME = 500;

  useEffect(() => {
    const id = setInterval(() => {
      axios.get(url).then((response) => {
        response.data.newsPortal.reverse();
        setAllNewsData(response.data.newsPortal);
      });
    }, WAIT_TIME);
    return () => clearInterval(id);
  }, [allNewsData]);

  return (
    <>
      {/* <BrowserRouter> */}
        {/* <Header /> */}
        <div>
          hi
          {/* <Suspense
            fallback={
              <div>
                <div>Loading...</div>
              </div>
            }
          > */}
          {/* <Routes>
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
          </Routes> */}
          {/* </Suspense> */}
        </div>
        <div>{/* <NewsRoomComponent /> */}</div>
        <div>{/* <Footer /> */}</div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
