/* eslint-disable */
import React from "react";
//ReactDOM?
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

console.log(process.env)

import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ThemeProvider } from "./components/Theme";


const root = createRoot(document.getElementById("root"));
root.render(
<>   
<ThemeProvider>
      <App />
</ThemeProvider>
</> 
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();