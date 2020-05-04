import React from "react";
import Header from "./components/Header/Header";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import ImageHeader from "./components/ImageHeader/ImageHeader";
import SearchBar from "./components/SearchBar/SearchBar";
import Popular from "./components/Popular/Popular";

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
`;

function App() {
   return (
      <div className="App">
         <GlobalStyle />
         <Header />
         <ImageHeader />
         <SearchBar />
         <Popular />
      </div>
   );
}

export default App;
