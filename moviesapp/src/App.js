import React, { useContext } from "react";
import Header from "./components/Header/Header";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import ImageHeader from "./components/ImageHeader/ImageHeader";
import SearchBar from "./components/SearchBar/SearchBar";
import Popular from "./components/Popular/Popular";
import SearchResult from "./components/SearchResult/SearchResult";
import Home from "./components/Home/Home";
import MoviePage from "./components/MoviePage/MoviePage";

import Context from "./Context";
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link,
   useParams,
} from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
`;

function App() {
   const context = useContext(Context);
   return (
      <div className="App">
         <GlobalStyle />
       

         <Router>
         <Header />
            <Switch>
               <Route path="/"  component={Home} />
               <Route path="/:id" exact component={MoviePage} />
            </Switch>
         </Router>
      </div>
   );
}

export default App;
