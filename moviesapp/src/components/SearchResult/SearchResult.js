import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import MovieCard from "../MovieCard/MovieCard";
import Context from "../../Context";
const SearchResult = () => {
   const context = useContext(Context);
   const [result, setResult] = useState([]);
   const fetchData = async () => {
      const data = await axios.get(
         `https://api.themoviedb.org/3/search/movie?api_key=${context.KEY}&language=en-US&query=${context.input}&page=1&include_adult=false`
      );
      setResult(data.data.results);
   };

   useEffect(() => {
      fetchData();
   }, [context.input]);

   return (
      <Container>
         <h2>Search Result</h2>
         <div className="list">
            {result.map((movie) => {
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
   .list {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      padding: 0 10em 0 10em;
   }
`;

export default SearchResult;
