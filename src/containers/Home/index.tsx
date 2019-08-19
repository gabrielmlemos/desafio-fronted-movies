import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { API_KEY, REQUEST_LANGUAGE } from "../../api/query";

import MovieBox from "../../components/MovieBox";
import Pagination from "../../components/Pagination";

import { debounce } from "lodash";

import "./style.scss";
import { getGenreId } from "../../utils/helpers";

function Home() {
  const [movies, setMovies] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [urlRequest, setUrlRequest] = useState("");

  const [totalPages, setTotalPages] = useState<number>();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (search.length === 0) {
      setUrlRequest(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=${REQUEST_LANGUAGE}`
      );
    } else {
      if (search.length === 4 && !!parseInt(search)) {
        setUrlRequest(
          `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=${REQUEST_LANGUAGE}&primary_release_year=${search}`
        );
      } else {
        const genreId = getGenreId(search);
        if (genreId !== null) {
          setUrlRequest(
            `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=${REQUEST_LANGUAGE}&with_genres=${genreId}`
          );
        } else {
          setUrlRequest(
            `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=${REQUEST_LANGUAGE}&query=${search}`
          );
        }
      }
    }
  }, [search]);

  useEffect(() => {
    scrollToTop();
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  useEffect(() => {
    const moviesQuery = () =>
      fetch(urlRequest)
        .then(res => res.json())
        .then(res =>
          res.results.length > 0
            ? (setMovies(res.results),
              setTotalPages(Math.ceil(res.results.length / 5)))
            : null
        )
        .catch(err => console.log(err));

    const debounced = debounce(moviesQuery, 500);

    debounced();

    return () => {
      debounced.cancel();
    };
  }, [urlRequest]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const lastMovieIndex = currentPage * 5;
  const firstMovieIndex = lastMovieIndex - 5;
  const moviesPerPage = movies.slice(firstMovieIndex, lastMovieIndex);

  return (
    <section className="home-container">
      <input
        type="search"
        placeholder="Busque um filme por nome, ano ou gênero..."
        value={search}
        onChange={handleSearchChange}
      />
      <main>
        {moviesPerPage.map(movie => (
          <Link
            key={movie.id}
            to={`/filme/${movie.id}`}
            style={{ textDecoration: "none" }}
          >
            <MovieBox
              title={movie.title}
              poster={movie.poster_path}
              score={movie.vote_average}
              releaseDate={movie.release_date}
              description={movie.overview}
              genres={movie.genre_ids}
            />
          </Link>
        ))}
      </main>
      {totalPages && (
        <Pagination
          totalPages={totalPages}
          current={currentPage}
          setCurrent={setCurrentPage}
        />
      )}
    </section>
  );
}

export default Home;
