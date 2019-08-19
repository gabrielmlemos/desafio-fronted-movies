import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { RouteComponentProps } from "react-router";
import { API_KEY, REQUEST_LANGUAGE } from "../../api/query";

import DetailedMovieBox from "../../components/DetailedMovieBox";

import "./style.scss";

interface IDetailedPageProps
  extends RouteComponentProps<{
    id: string;
  }> {}

function DetailedPage(props: IDetailedPageProps) {
  const { id } = props.match.params;

  const [movie, setMovie] = useState<any>();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${parseInt(
        id
      )}?api_key=${API_KEY}&language=${REQUEST_LANGUAGE}&append_to_response=videos`
    )
      .then(res => res.json())
      .then(res => setMovie(res))
      .catch(err => console.log(err));
  }, [id]);

  return (
    <section className="movie-content">
      {movie && movie.title && (
        <DetailedMovieBox
          title={movie.title}
          releaseDate={movie.release_date}
          status={movie.status}
          score={movie.vote_average}
          genres={movie.genres}
          poster={movie.poster_path}
          budget={movie.budget}
          revenue={movie.revenue}
          runtime={movie.runtime}
          language={movie.original_language}
          description={movie.overview}
          videos={movie.videos.results}
        />
      )}
      <Link to="/" style={{ textDecoration: "none" }}>
        <p className="back-to-home">Voltar</p>
      </Link>
    </section>
  );
}

export default DetailedPage;
