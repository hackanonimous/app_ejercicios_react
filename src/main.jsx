import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter as Routes} from  "react-router-dom"
import App from "./App"

ReactDOM.createRoot(document.getElementById("root")).render(
    <Routes>
        <App/>
    </Routes>,
)