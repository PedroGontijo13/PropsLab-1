import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import jokesData from "./data/jokesData";

function App() {

  const f = (id) => {
    console.log(id)
  }

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {jokesData.map((item, index) => (
              <Card data={item} func={f} id={index + 1} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
