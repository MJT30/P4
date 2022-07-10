import React, { useEffect, useState } from "react";

const Fetch = () => {
  const [test, setTest] = useState();
  const url = "http://localhost:8000/api/leads/";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setTest(res);
      })
      .catch(console.error);
  }, []);

  return <div>{}</div>;
};

export default Fetch;
