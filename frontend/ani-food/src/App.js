import React from "react";
import NewPost from "./components/NewPost";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
// import Fetch from "./components/Fetch";
import Header from "./components/Header";
import Content from "./components/Content";
function App() {
  return (
    <div className="App">
      <Header />
      <br />
      <Content />
    </div>
  );
}

export default App;
