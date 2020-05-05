import React, { useState } from "react";
import Context from "./Context";

const ContextProvider = (props) => {
   const [isSearchMode, setIsSearchMode] = useState(false);
   const [input, setInput] = useState("");

   return (
      <Context.Provider
         value={{ isSearchMode, setIsSearchMode, input, setInput }}
      >
         {props.children}
      </Context.Provider>
   );
};
export default ContextProvider;
