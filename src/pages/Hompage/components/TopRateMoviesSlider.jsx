import React from "react";
import MovieSlider from "../../../common/MovieSlider/MovieSlider";
import { useTopRateMoviesQuery } from "../../../hooks/useTopRateMovies";
import { Alert } from "bootstrap";
import { responsive } from "../../../constansts/responsive";

const TopRateMoviesSlider = () => {
  const { data, isLoading, isError, error } = useTopRateMoviesQuery();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div className="px-2 mt-5">
      <MovieSlider
        title="Top Rate Movies"
        movies={data.results}
        responsive={responsive}
      />
    </div>
  );
};

export default TopRateMoviesSlider;
