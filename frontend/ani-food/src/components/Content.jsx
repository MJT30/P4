import React, { useEffect, useState } from "react";
import "./header.css";
const Content = () => {
  const [backEnd, setBackend] = useState([{}]);
  useEffect(() => {
    fetch("/api") //<------ Fetching data from my backend that is listining on port 4000 & the proxy is defined in the package.json file ------>//
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setBackend(data);
      });
  }, []);

  return <div><>
  <div className="content">

  <h1>{backEnd[0].dish}</h1>
  <h5>{backEnd[0].anime}</h5>
  <img className="image" src={backEnd[0].anime_image} alt="..."/>
  <img className="image" src={backEnd[0].rl_image} alt="..."/>
  <p className="recipe">
    {backEnd[0].recipe}
  </p>
  </div>
    
  </></div>;
  
};

export default Content;
