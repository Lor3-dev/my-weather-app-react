import React from "react";
import Weather from "./Weather";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Paris" />
        <footer>
          This project was coded by Lorena Ibeas and is {""}
          <a
            href="https://github.com/Lor3-dev/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GItHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
