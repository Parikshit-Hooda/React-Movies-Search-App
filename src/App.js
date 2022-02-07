import React, { useState, useEffect } from "react";
import Movie from "./components/Movie";
import "./styles.css";
import { APIKEY } from "../apiKey.js";

const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${APIKEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=${APIKEY}=`;

function App() {
  const [movies, setMovies] = useState([]);

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  };

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  return (
    <>
      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </>
  );
}

export default App;
