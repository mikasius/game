import React from "react";
import "./App.css";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Questions } from "./Questions";

function App() {
  return (
    <div className="App">
      <Header />
      <Questions />
      <Footer />
    </div>
  );
}

export default App;
