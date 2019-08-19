import React from "react";

import GenreTag from "../GenreTag";

import { prettifyDate } from "../../utils/prettiers";
import { getGenreNames } from "../../utils/helpers";

import "./style.scss";

import * as placeholder from "../../assets/images/poster-placeholder.png";

interface IMoviesProps {
  title: string;
  poster: string | null;
  score: number;
  releaseDate: string;
  description: string;
  genres: number[];
}

function MovieBoxRaw(props: IMoviesProps) {
  const { title, poster, score, releaseDate, description, genres } = props;

  return (
    <div className="movie-box">
      <div
        className="image"
        style={{
          backgroundImage: poster
            ? `url(https://image.tmdb.org/t/p/original${poster})`
            : `url(${placeholder})`
        }}
      />
      <div className="info">
        <div className="title">
          <h2>{title}</h2>
          <div className="score">{`${score * 10}%`}</div>
        </div>
        <div className="description">
          <p className="date">{prettifyDate(releaseDate)}</p>
          <p className="sinopse">
            {description ? description : "Sem sinopse."}
          </p>
          <div className="tags">
            {genres.map(genre => (
              <GenreTag key={genre} genreName={getGenreNames(genre)} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const MovieBox = React.memo(MovieBoxRaw);
export default MovieBox;
