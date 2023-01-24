import { useEffect, useState, useContext } from "react";
import Loading from "./Loading";
import Card from "./sample_card";
import { Context } from "./context";
import { API } from "./api";
import "./style.css";
function Home() {
  const [newmovie, setNewmovie] = useState();
  const [reload, setLoad] = useContext(Context);
  useEffect(() => {
    fetch(`${API}/movies`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setNewmovie(data.movies);
      });
  }, [reload]);
  return newmovie ? (
    <div className="container">
      <div className=" cards-list">
        {newmovie.map((mv, i) => (
          <Card key={i} movie={mv} />
        ))}
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default Home;
