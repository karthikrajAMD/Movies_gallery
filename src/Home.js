import { Link } from "react-router-dom";
import Card from "./sample_card";
import "./style.css";
function Home({ newmovie }) {
  return (
    <>
      <nav>
        <nav>
          <Link className="link" to="/Add-Movie">
            Add Movies
          </Link>
        </nav>
      </nav>

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
