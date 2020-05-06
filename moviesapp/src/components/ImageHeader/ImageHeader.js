import React from "react";
import styled from "styled-components";

const ImageHeader = ({ movie, crew }) => {
  const backdrop_imgSrc = movie
    ? "http://image.tmdb.org/t/p/w1280/" + movie.backdrop_path ||
      movie.poster_path
    : "http://image.tmdb.org/t/p/w1280/1R6cvRtZgsYCkh8UFuWFN33xBP4.jpg";

  const poster_imgSrc = movie
    ? "http://image.tmdb.org/t/p/w1280/" + movie.poster_path ||
      movie.backdrop_path
    : "http://image.tmdb.org/t/p/w1280/1R6cvRtZgsYCkh8UFuWFN33xBP4.jpg";

  const defaultText = !movie ? (
    <>
      <h2>Extraction</h2>
      <p>
        Tyler Rake, a fearless mercenary who offers his services on the black
        market, embarks on a dangerous mission when he is hired to rescue the
        kidnapped son of a Mumbai crime lord…
      </p>
    </>
  ) : null;

  return (
    <Container img={backdrop_imgSrc}>
      {movie ? (
        <MovieDetails>
          <img src={poster_imgSrc} />
          <div className="details">
            <h3>{movie.original_title}</h3>
            <h4 className="text bold">PLOT</h4>
            <p className="text">{movie.overview}</p>
            <p className="text bold">GENRES</p>
            <p className="text">
              {movie.genres.map((i) => (
                <span>{i.name}</span>
              ))}
            </p>
            <p className="text bold">IMDB RATING</p>
            <p className="text"><i class="star outline icon"></i>{movie.vote_average}</p>
            <p className="text bold">DIRECTOR</p>
            <p className="text">
              {crew.map((i) => (i.job === "Director" ? i.name : null))}
              <i class="film icon" style={{fontSize: "xx-large",paddingLeft: "1em"}}></i>
            </p>
          </div>
        </MovieDetails>
      ) : null}
      <div className="content">{defaultText}</div>
    </Container>
  );
};

const MovieDetails = styled.div`
  display: flex;
  width: 84em;
  background-color: #000000a0;
  height: 33em;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  img {
    width: 30%;
    object-fit: cover;
  }
  h3 {
    padding: 1.5em 0 0 1.5em;
    color: white;
    font-size: 3em;
    font-family: "Montserrat", sans-serif;
  }
  .text {
    padding: 1em 0 0 3.8em;
    color: white;
    font-size: 1.2em;
    font-family: "Montserrat", sans-serif;

    span {
      padding: 1em;
    }
  }
  .bold {
    font-weight: bold;
  }

  .director {
    padding: 0 10em;
  }
`;

const Container = styled.div`
  height: 38em;
  display: flex;
  position: relative;
  background: linear-gradient(
      rgba(0, 0, 0, 0) 39%,
      rgba(0, 0, 0, 0) 41%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url(${(props) => props.img}), rgb(28, 28, 28);
  background-size: cover;
  background-position: center;

  .content {
    display: flex;
    flex-direction: column;
    width: 42em;
    height: 100%;
    justify-content: flex-end;
    margin-left: 18em;
    color: white;

    h2 {
      font-size: 3.5em;
    }
    p {
      margin-top: 2em;
      margin-bottom: 3em;
      font-size: 1.5em;
    }
    i{
       background-color: white;
       color: white;
    }
  }
`;
export default ImageHeader;
