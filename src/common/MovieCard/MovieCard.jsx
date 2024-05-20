import React from "react";
import { Badge } from "react-bootstrap";
import "./MovieCard.style.css";
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { data: genreData } = useMovieGenreQuery();
  const navigate = useNavigate();
  const showGenre = (genreIdList) => {
    if (!genreData) {
      return [];
    }
    const genreNameList = genreIdList.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id);
      return genreObj.name;
    });

    return genreNameList;
  };
  return (
    <div
      style={{
        backgroundImage: `url(https://media.themoviedb.org/t/p/w220_and_h330_bestv2/${movie.poster_path})`,
      }}
      className="movie-card"
      onClick={() => navigate(`/movies/${movie.id}`)}
    >
      <div className="overlay p-2">
        <div>
          <h1>{movie.title}</h1>
          <div>
            {showGenre(movie.genre_ids).map((id, index) => (
              <Badge bg="warning" key={index}>
                {id}
              </Badge>
            ))}
          </div>
        </div>
        <div className="mt-2">
          <div>평점 : {movie.vote_average}</div>
          <div>
            {movie.adult ? (
              <Badge bg="danger">청소년 관람불가</Badge>
            ) : (
              <Badge bg="success">전체 이용가능</Badge>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
