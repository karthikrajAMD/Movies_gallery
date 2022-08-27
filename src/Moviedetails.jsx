import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function Moviedetails() {
  const { id } = useParams();
  console.log(id);
  const [movie, setMovie] = useState({});
  useEffect(() => {
    fetch(`https://6301d5f39a1035c7f807c7e5.mockapi.io/movies/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, []);
  const fullname = movie.fullname;
  return (
    <div className="container">
      <div className="row">
        <iframe
          width="885"
          height="498"
          //   height="500"

          src={movie.trailer}
          title="BREAKING BAD season 1-5 trailer"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="moviedetail">
        {fullname ? <h3>{movie.fullname}</h3> : <h3>{movie.name}</h3>}
        <p className="rating">⭐{movie.rating}</p>
        <p>{movie.descrip}</p>
      </div>
    </div>
  );
}
