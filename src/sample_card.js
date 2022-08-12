import "./style.css";
import Counter from "./Counter";
function Card({ movie }) {
  // console.log(movie);

  return (
    <>
      <div className="col col-12 col-sm-6 col-lg-3" id="whole-card">
        <img src={movie.image} alt={movie.name} className="img-fluid" />
        <div className="movie-spec">
          <h3>{movie.name}</h3>
          <p>⭐{movie.rating}</p>
        </div>
        <div className="descript">
          <p>{movie.descrip}</p>
          <Counter />
        </div>
      </div>
    </>
  );
}
export default Card;
