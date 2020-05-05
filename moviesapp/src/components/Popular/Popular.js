import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MovieCard from "../MovieCard/MovieCard";
import axios from "axios";
require("dotenv").config();

const Popular = () => {
   const [movies, setMovies] = useState([]);
   const [page, setPage] = useState(1);

   const loadMore = async () => {
      const data = await axios.get(
         `https://api.themoviedb.org/3/movie/popular?api_key=${
            process.env.REACT_APP_API_KEY
         }&language=en-US&page=${page + 1}`
      );
      setMovies((state) => [...state, ...data.data.results]);
      setPage((state) => state + 1);
   };

   const fetchData = async () => {
      const data = await axios.get(
         `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      );
      setMovies(data.data.results);
      console.log(data.data.results);
   };

   useEffect(() => {
      fetchData();
   }, []);

   return (
      <Container>
         <h2>Popular Movies</h2>
         <div className="list">
            {movies.map((movie) => {
               return <MovieCard data={movie} />;
            })}
         </div>
         <div className="btn-container">
            <button className="loadMore" onClick={loadMore}>
               Load More
            </button>
         </div>
      </Container>
   );
};

const Container = styled.div`
   h2 {
      font-size: 3em;
      margin-left: 6em;
      margin-top: 0.5em;
      margin-bottom: 0.5em;
   }
   .row {
   }
   .list {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      padding: 0 10em 0 10em;
   }
   .btn-container {
      display: flex;
      justify-content: center;
      padding: 2em;
   }
   .loadMore {
      background-color: #16d47b;
      border-width: 0;
      width: 27.5em;
      height: 1.5em;
      color: white;
      font-size: 3em;
   }
   .loadMore:hover {
      background-color: #16d47ba0;
      cursor: pointer;
   }
`;

export default Popular;
