//import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

import React from "react";
import ReactDOM from "react-dom/client";
//ReactDOM.render(<App/>, document.querySelector("#root"))

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


