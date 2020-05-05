import React from "react";
import styled from "styled-components";
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link,
   useParams,
} from "react-router-dom";

const MovieCard = ({ data }) => {
   console.log(`/${data}`);
   return (
      <Container img={data.poster_path}>
         <Link to={`/${data.id}`}>
            <img src={`http://image.tmdb.org/t/p/w500///${data.poster_path}`} />
         </Link>
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
