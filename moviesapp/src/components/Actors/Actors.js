import React from "react";
import styled from "styled-components";
import ActorCard from '../ActorCard/ActorCard'

const Actors = ({ movie,cast }) => {
  return (
      <Container>
      <h2>Actors</h2>
      <div className="list">
        {cast.map((i) => {
          return <ActorCard path={i.profile_path} char={i.character} name={i.name}/>;
        })}
      </div>
      </Container>
   
  );
};

export default Actors;

const Container = styled.div`
  
  
  h2{
  font-size: 3em;
  margin-left: 0;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  }

  .list {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin: 0 10em 10em 0; 
   }
`;
