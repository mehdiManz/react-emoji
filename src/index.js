import React from "react";
import ReactDOM from "react-dom";
import App from "./comp/App";
import emojipedia from "./emojipedia";


ReactDOM.render(<App emojipedia={emojipedia} />, document.getElementById("root"));
