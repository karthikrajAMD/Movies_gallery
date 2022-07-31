import "./style.css";
function Card(props) {
  return (
    <>
      <div class="col col-md-6 com-sm-12 col-lg-4">
        <img src={props.image} alt={props.name} />
        <div class="movie-spec">
          <h3>{props.name}</h3>
          <p>⭐{props.rating}</p>
        </div>
        <div class="descript">
          <p>{props.decript}</p>
        </div>
      </div>
    </>
  );
}
export default Card;
