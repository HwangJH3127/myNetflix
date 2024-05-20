import React from "react";
import MovieSlider from "../../../common/MovieSlider/MovieSlider";
import { useUpcomingMoviesQuery } from "../../../hooks/useUpcomingMovies";
import { Alert } from "bootstrap";
import { responsive } from "../../../constansts/responsive";

const UpcomingMoviesSlider = () => {
  const { data, isLoading, isError, error } = useUpcomingMoviesQuery();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <div className="px-2 mt-5">
      <MovieSlider
        title="Upcoming Movies"
        movies={data.results}
        responsive={responsive}
      />
    </div>
  );
};

export default UpcomingMoviesSlider;
