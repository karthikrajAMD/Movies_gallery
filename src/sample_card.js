import "./style.css";
import { Counter } from "./Counter";
import InfoIcon from "@mui/icons-material/Info";
import Moviedetails from "./Moviedetails";
import { Button, IconButton } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
function Card({ movie }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="col col-12 col-sm-6 col-lg-3" id="whole-card">
        <img src={movie.image} alt={movie.name} className="img-fluid" />
        <div className="movie-spec">
          <h3>{movie.name}</h3>

          <p className="rating">⭐{movie.rating}</p>
        </div>
        <div className="iconlist">
          <IconButton
            className="infobut"
            onClick={() => navigate(`/${movie.id}`)}
          >
            <InfoIcon className="info" color="primary" />
          </IconButton>
          <IconButton className="editbut">
            <EditIcon className="edit" color="success" />
          </IconButton>
          <IconButton
            className="deletebut"
            onClick={() => {
              const input = window.confirm(
                `Are you sure to delete ${movie.name} movie`
              );
              if (input) {
                fetch(
                  `https://6301d5f39a1035c7f807c7e5.mockapi.io/movies/${movie.id}`,
                  {
                    method: "DELETE",
                  }
                );
                navigate("/");
              }
            }}
          >
            <DeleteForeverIcon className="delete" color="secondary" />
          </IconButton>
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
