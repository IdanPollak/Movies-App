import React, { useContext } from "react";
import Header from "../Header/Header";
import ImageHeader from "../ImageHeader/ImageHeader";
import SearchBar from "../SearchBar/SearchBar";
import Context from "../../Context";
import Popular from "../Popular/Popular";
import SearchResult from "../SearchResult/SearchResult";
const Home = () => {
   const context = useContext(Context);

   return (
      <>
         <ImageHeader />
         <SearchBar />
         {!context.isSearchMode ? <Popular /> : <SearchResult />}
      </>
   );
};

export default Home;
