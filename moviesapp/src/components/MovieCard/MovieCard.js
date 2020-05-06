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
   
   return (
      <Container img={data.poster_path}>
         <Link to={`/${data.id}`}>
            {data.poster_path? <img src={`http://image.tmdb.org/t/p/w500///${data.poster_path}`} />: <div className="no-image">NO IMAGE</div>}
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
   .no-image {
    background-color: black;
    color: white;
    width: 100%;
   height: 100%;
  
   font-size: 2em;
    display: flex;
    justify-content: center;
    line-height: 12em;
  }
`;

export default MovieCard;
