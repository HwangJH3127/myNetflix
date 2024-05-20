import { Route, Routes } from "react-router-dom";

import AppLayout from "./layout/AppLayout";
import Homepage from "./pages/Hompage/Homepage";
import MoviePage from "./pages/Movies/MoviePage";
import MovieDetailPage from "./pages/MovieDetail/MovieDetailPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.css";
// 홈페이지 /
// 영화 전체 페이지(서치) /movies
// 영화 상세페이지 /movies/:id
// 추천 영화 /movies/:id/recommandation
// 리뷰 /movies/:id/reviews
// 공통되는 movies/ 경로의 파일들은 하나의 라우트안에 또 넣어주면된다.
function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Homepage />} />
        <Route path="movies">
          <Route index element={<MoviePage />} />
          <Route path=":id" element={<MovieDetailPage />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
