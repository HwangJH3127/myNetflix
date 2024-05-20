import React, { useEffect, useState } from "react";
import Banner from "./components/Banner/Banner";
import PopularMovieSlide from "./components/PopularMovieSlide";
import TopRateMoviesSlider from "./components/TopRateMoviesSlider";
import UpcomingMoviesSlider from "./components/UpcomingMoviesSlider";

// 1. 배너 > 탑 순위 영화의 첫번째를 보여줌
// 2. 인기있는 영화
// 3. 탑 순위 영화
// 4. 상영예정작
const Homepage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768); // You can adjust the threshold as needed
    };

    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);
  return (
    <div>
      <Banner />
      <div className={isMobile ? "px-3" : "px-5"}>
        <PopularMovieSlide />
        <TopRateMoviesSlider />
        <UpcomingMoviesSlider />
      </div>
    </div>
  );
};

export default Homepage;
