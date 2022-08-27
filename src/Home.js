import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./sample_card";

import "./style.css";
function Home() {
  const [newmovie, setNewmovie] = useState([]);
  useEffect(() => {
    fetch("https://6301d5f39a1035c7f807c7e5.mockapi.io/movies", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setNewmovie(data));
  });
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          {newmovie.map((mv, i) => (
            <Card key={i} movie={mv} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
