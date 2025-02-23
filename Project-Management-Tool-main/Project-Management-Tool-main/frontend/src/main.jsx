// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import './index.css'
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
