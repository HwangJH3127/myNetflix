import React from "react";
import MovieSlider from "../../../common/MovieSlider/MovieSlider";
import { usePopularMoviesQuery } from "../../../hooks/usePopularMovies";
import { Alert } from "bootstrap";
import { responsive } from "../../../constansts/responsive";

const PopularMovieSlide = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <div className="px-2 mt-5">
      <MovieSlider
        title="Popular Movies"
        movies={data.results}
        responsive={responsive}
      />
    </div>
  );
};

export default PopularMovieSlide;
