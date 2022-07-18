import React, { useEffect, useState } from "react";
import "./header.css";
const Content = () => {
  const [backEnd, setBackend] = useState(null);
  useEffect(() => {
    fetch("/home") //<------ Fetching data from my backend that is listining on port 4000 & the proxy is defined in the package.json file ------>//
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setBackend(data);
      });
  }, []);

  return (
    <div>
      {backEnd && (
        <>
          <div className="content">
            <h1>{backEnd[2].dish}</h1>
            <h5>{backEnd[2].anime}</h5>
            <img className="image" src={backEnd[2].anime_image} alt="..." />
            <img className="image" src={backEnd[2].rl_image} alt="..." />
            <p className="recipe">{backEnd[2].recipe}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Content;
