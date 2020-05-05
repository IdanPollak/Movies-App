import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ImageHeader from "../ImageHeader/ImageHeader";
import styled from "styled-components";

const MoviePage = () => {
   const [movie, setMovies] = useState();
   const [loading, setLoading] = useState(true);
   const { id } = useParams();

   const fetchMovie = async () => {
      const data = await axios.get(
         `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      console.log(data.data);
      setMovies(data.data);
      setLoading(false);
   };

   useEffect(() => {
      fetchMovie();
   }, []);

   return (
      <div>
         {loading ? null : (
            <>
               <Top>Home / {movie.original_title}</Top>
               <ImageHeader movie={movie} />
            </>
         )}
      </div>
   );
};

const Top = styled.div`
   background-color: #353535;
   color: white;
   height: 2em;
   line-height: 2em;
   padding-left: 12em;
   font-size: 1.5em;
`;
export default MoviePage;
