import React from "react";
import styled from "styled-components";

const MovieCard = ({ data }) => {
   console.log(data.poster_path);
   return (
      <Container img={data.poster_path}>
         <img src={`http://image.tmdb.org/t/p/w500///${data.poster_path}`} />
      </Container>
   );
};

const Container = styled.div`
   width: 19.1em;
   height: 25em;
   margin: 1em;
   img {
      width: 100%;
      height: 100%;
   }
`;

export default MovieCard;
