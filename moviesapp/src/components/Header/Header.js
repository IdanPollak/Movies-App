import React from "react";
import styled from "styled-components";
const Header = () => {
   return (
      <Container>
         <h1>Movies App</h1>
      </Container>
   );
};

const Container = styled.div`
   height: 8em;
   background-color: #1c1c1c;
   display: flex;
   align-items: center;
   h1 {
      color: white;
      margin-left: 6em;
      font-size: 3em;
   }
`;
export default Header;
