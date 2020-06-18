import React, { useState } from "react";
import Context from "./Context";

const ContextProvider = (props) => {
   const [isSearchMode, setIsSearchMode] = useState(false);
   const [input, setInput] = useState("");
   const KEY = '80d26555cb847a295fad38896d190cbf';

   return (
      <Context.Provider
         value={{ isSearchMode, setIsSearchMode, input, setInput,KEY }}
      >
         {props.children}
      </Context.Provider>
   );
};
export default ContextProvider;
