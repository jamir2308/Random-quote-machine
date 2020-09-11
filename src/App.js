import React from "react";
import { Footer } from "./components/Footer";
import { Quotes } from "./components/Quotes";

function App() {
  return (
    <div className="App">
      <h1>Random Quote Machine</h1>
      <Quotes />
      <Footer />
    </div>
  );
}

export default App;
