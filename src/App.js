import React, { useState, useEffect } from "react";
import Movie from "./components/Movie";
import "./styles.css";
import { APIKEY } from "..apiKey.js";

const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${APIKEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=${APIKEY}=`;

function App() {}

export default App;
