import React, { useState, useContext } from "react";
import Context from "../../Context";
import styled from "styled-components";

const SearchBar = () => {
   const context = useContext(Context);

   const changeHandler = (e) => {
      context.setInput(e.target.value);

      if (e.target.value.length > 0) {
         context.setIsSearchMode(true);
      } else {
         context.setIsSearchMode(false);
      }
   };

   return (
      <Container>
         <div className="ui category search">
            <div className="ui icon input custom">
               <input
                  className="prompt"
                  type="text"
                  placeholder="Search movie..."
                  value={context.input}
                  onChange={changeHandler}
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
      color: white;
   }
   .icon {
      left: 0;
      color: white;
   }
`;
export default SearchBar;
