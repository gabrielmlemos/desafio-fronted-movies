import React from "react";

import GenreTag from "../GenreTag";
import {
  prettifyDate,
  prettifyRuntime,
  prettifyStatus
} from "../../utils/prettiers";
import { getLanguages, toCurrencyString } from "../../utils/helpers";

import "./style.scss";

import * as placeholder from "../../assets/images/poster-placeholder.png";

interface IDetailedMovieBoxRawProps {
  title: string;
  releaseDate: string;
  description: string;
  status: string;
  language: string;
  runtime: number;
  budget: number;
  poster: string;
  score: number;
  revenue: number;
  genres: Array<{
    id: number;
    name: string;
  }>;
  videos: Array<{
    id: string;
    site: string;
    key: string;
  }>;
}

function DetailedMovieBoxRaw(props: IDetailedMovieBoxRawProps) {
  const {
    title,
    releaseDate,
    description,
    status,
    language,
    runtime,
    budget,
    poster,
    score,
    revenue,
    genres,
    videos
  } = props;

  return (
    <article className="content">
      <section className="movie-info">
        <header className="movie-header">
          <h1>{title}</h1>
          <h2>{prettifyDate(releaseDate)}</h2>
        </header>
        <section className="info">
          <div className="description">
            <section>
              <h3>Sinopse</h3>
              <p className="sinopse">{description}</p>
            </section>
            <section>
              <h3>Informações</h3>
              <div className="details">
                <div className="detail">
                  <label>Situação</label>
                  <p>{prettifyStatus(status)}</p>
                </div>
                <div className="detail">
                  <label>Idioma</label>
                  <p>{getLanguages(language)}</p>
                </div>
                <div className="detail">
                  <label>Duração</label>
                  <p>{prettifyRuntime(runtime)}</p>
                </div>
                <div className="detail">
                  <label>Orçamento</label>
                  <p>{toCurrencyString(budget)}</p>
                </div>
                <div className="detail">
                  <label>Receita</label>
                  <p>{toCurrencyString(revenue)}</p>
                </div>
                <div className="detail">
                  <label>Lucro</label>
                  <p>Sem informação</p>
                </div>
              </div>
              <div className="tags">
                {genres.map(genre => (
                  <GenreTag key={genre.id} genreName={genre.name} />
                ))}
              </div>
              <div className="score">{`${score * 10}%`}</div>
            </section>
          </div>
          <div
            className="poster"
            style={{
              backgroundImage: poster
                ? `url(https://image.tmdb.org/t/p/original${poster})`
                : `url(${placeholder})`
            }}
          />
        </section>
      </section>
      <section className="video-section">
        {videos.length > 0 ? (
          <iframe
            title="movie-video"
            src={`http://www.youtube.com/embed/${videos[0].key}`}
            allowFullScreen={true}
            frameBorder="0"
          />
        ) : (
          <div className="video-placeholder">Vídeo Indisponível</div>
        )}
      </section>
    </article>
  );
}

const DetailedMovieBox = React.memo(DetailedMovieBoxRaw);
export default DetailedMovieBox;
