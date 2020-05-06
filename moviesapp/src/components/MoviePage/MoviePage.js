import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ImageHeader from "../ImageHeader/ImageHeader";
import styled from "styled-components";
import ImageBottom from '../ImageBottom/ImageBottom'
import Actors from "../Actors/Actors";

const MoviePage = () => {
   const [movie, setMovies] = useState();
   const [cast, setCast] = useState([]);
   const [crew, setCrew] = useState([]);
   const [loading, setLoading] = useState(true);
   const { id } = useParams();

   const fetchMovie = async () => {
      const data = await axios.get(
         `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      //console.log(data.data);
      setMovies(data.data);
      setLoading(false);
   };

   const fetchCast = async () => {
      const cast = await axios.get(
         `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}`
      );
      //console.log(cast.data.cast);
      setCast(cast.data.cast);
      setCrew(cast.data.crew);
   };

   useEffect(() => {
      fetchMovie();
      fetchCast();
   }, []);

   return (
      <div>
         {loading ? <h1 style={{fontSize: "3em"}}className="error-header">No Movie Found!</h1> : (
            <>
               <Top>Home / {movie.original_title}</Top>
               <ImageHeader movie={movie} crew={crew} />
               <ImageBottom movie={movie}/>
               <Actors movie={movie} cast={cast}/>
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
