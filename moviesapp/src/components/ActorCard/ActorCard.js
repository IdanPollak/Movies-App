import React from "react";
import styled from "styled-components";

const ActorCard = ({ path, char, name }) => {
  return (
    <Container>
      <img src={`http://image.tmdb.org/t/p/w154${path}`} />
      <p>
        <div className="name">{name}</div>
        <div className="char">{char}</div>
      </p>
    </Container>
  );
};

export default ActorCard;

const Container = styled.div`
  width: 25em;
  height: 15em;
  padding: 1em 1em 1em 0;
  margin: 1em;
  display: flex;
  justify-content: center;

  img {
    height: 100%;
  }

  p {
    background-color: #353535;
    color: white;
    width: 20em;
    display: flex;
    flex-direction: column;
    padding: 1em 0 0 1em;
  }

  .name {
  font-size: 1.5em;
  }

  .char {
    margin-top: 1em;
  }
`;
