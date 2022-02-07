import React, { useState, useEffect } from "react";
import Movie from "./components/Movie";
import { APIKEY } from "../apiKey.js";

const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${APIKEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&language=en-US&page=1&include_adult=false&query=`;

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (searchTerm) {
      getMovies(`${SEARCH_API}${searchTerm}`);
      setSearchTerm("");
    }
  };

  const handleOnChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  return (
    <>
      <header>
        <form onSubmit={handleOnSubmit}>
          <input
            type="search"
            className="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </header>

      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </>
  );
}

export default App;
