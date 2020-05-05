import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MovieCard from "../MovieCard/MovieCard";
import axios from "axios";
require("dotenv").config();

const Popular = () => {
   const [movies, setMovies] = useState([]);
   const fetchData = async () => {
      const data = await axios.get(
         `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
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
`;

export default Popular;
