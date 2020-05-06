import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <div className="ui secondary pointing menu">
        <h1>
            <Link style={{color: "white"}} to="/" className="item">
              Movies App
            </Link>
        </h1>
      </div>
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
    margin-left: 5em;
    font-size: 3em;
    cursor: pointer;
  }
`;
export default Header;
