import React from "react";
import styled from "styled-components";

const ImageHeader = () => {
   return (
      <Container>
         <div className="content">
            <h2>Extraction</h2>
            <p>
               Tyler Rake, a fearless mercenary who offers his services on the
               black market, embarks on a dangerous mission when he is hired to
               rescue the kidnapped son of a Mumbai crime lord…
            </p>
         </div>
      </Container>
   );
};

const Container = styled.div`
   height: 38em;

   background: linear-gradient(
         rgba(0, 0, 0, 0) 39%,
         rgba(0, 0, 0, 0) 41%,
         rgba(0, 0, 0, 0.65) 100%
      ),
      url("http://image.tmdb.org/t/p/w1280/1R6cvRtZgsYCkh8UFuWFN33xBP4.jpg"),
      rgb(28, 28, 28);
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
   }
`;
export default ImageHeader;
