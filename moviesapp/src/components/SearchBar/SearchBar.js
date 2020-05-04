import React from "react";
import styled from "styled-components";

const SearchBar = () => {
   return (
      <Container>
         <div className="ui category search">
            <div className="ui icon input custom">
               <input
                  className="prompt"
                  type="text"
                  placeholder="Search movie..."
               />
               <i className="search icon"></i>
            </div>
            <div className="results"></div>
         </div>
      </Container>
   );
};

const Container = styled.div`
   display: flex;
   background-color: #1c1c1c;
   height: 7em;
   justify-content: center;
   align-items: center;
   .custom {
      width: 80em;
      height: 4em;
   }
   .ui.input > input {
      background-color: #353535;
      padding-left: 3em;
   }
   .icon {
      left: 0;
      color: white;
   }
`;
export default SearchBar;
