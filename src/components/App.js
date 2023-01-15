import React from "react";
import Header from "../components/Header/Header"
import About from "../components/About/About"
import Articlelist from "../components/ArticleList/ArticleList"
import blogData from "../data/blog";


console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header blogName="Underreacted" />
      <About  about="A blog about learning React" />
      <Articlelist/>
    </div>
  );
}

export default App;
