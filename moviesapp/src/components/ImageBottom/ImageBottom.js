import React from "react";
import styled from "styled-components";

const ImageBottom = ({ movie }) => {
  const time = movie.runtime;
  const Hours = Math.floor(time / 60);
  const minutes = time % 60;

  return (
    <Container>
      <p className="text">Running Time: {Hours + "h " + minutes + "m"}</p>
      <p className="text">
        Budget: $
        {movie.budget.toLocaleString(navigator.language, {
          minimumFractionDigits: 0,
        })}
      </p>
      <p className="text">
        Revenue: $
        {movie.revenue.toLocaleString(navigator.language, {
          minimumFractionDigits: 0,
        })}
      </p>
    </Container>
  );
};

export default ImageBottom;

const Container = styled.div`
  width: 100%;
  height: 6em;
  background-color: #1c1c1c;
  color: white;
  display: flex;
  align-items: center;

  .text {
    margin-left: 0;
    padding: 2em 2em 2em 12em;
    font-size: 1.5em;
  }
`;
