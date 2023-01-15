import React from "react";
import Article from "../Aticle/Article.js";




function Articlelist() {
  return (
    <main>
    <Article title="Components 101" date="December 15, 2020" preview="Setting up the building blocks of your site"/>
    <Article title="React Data Flow" date="December 11, 2020" preview="Passing props is never passé"/>
    <Article title="Function vs Class Components" preview="React, meet OOJS."/>
    </main>
  );
}

export default Articlelist;
