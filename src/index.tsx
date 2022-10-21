import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./index.css";
import App from "./App";
import Cabecalho from "./componentes/Cabecalho/Cabecalho";
import Card from "./componentes/Card/Card";

ReactDOM.render(
  <React.StrictMode>
    <Cabecalho />
    <Card>
      <App />
    </Card>
  </React.StrictMode>,
  document.getElementById("root")
);
