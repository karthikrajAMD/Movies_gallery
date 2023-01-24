import "./style.css";
import { Counter } from "./Counter";
import { useContext } from "react";
import InfoIcon from "@mui/icons-material/Info";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Context } from "./context";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { API } from "./api.jsx";
import EditIcon from "@mui/icons-material/Edit";
import { ToastContainer, toast } from "react-toastify";

function Card({ movie }) {
  const navigate = useNavigate();
  const [reload, setLoad] = useContext(Context);
  return (
    <>
      {/* className="col col-12 col-sm-6 col-lg-3" */}
      <div id="whole-card">
        <img src={movie.image} alt={movie.name} className="img-fluid" />
        <div className="movie-spec">
          <h3>{movie.name}</h3>

          <p className="rating">⭐{movie.rating}</p>
        </div>
        <div className="iconlist">
          <IconButton
            className="infobut"
            onClick={() => navigate(`/${movie._id}`)}
          >
            <InfoIcon className="info" color="primary" />
          </IconButton>
          <IconButton
            className="editbut"
            onClick={() => navigate(`/edit/${movie._id}`)}
          >
            <EditIcon className="edit" color="success" />
          </IconButton>
          <IconButton
            className="deletebut"
            onClick={() => {
              const input = window.confirm(
                `Are you sure to delete ${movie.name} movie`
              );
              if (input) {
                fetch(`${API}/movies/${movie._id}`, {
                  method: "DELETE",
                })
                  .then((res) => res.json())
                  .then((data) => {
                    if (data.status === 200) {
                      toast.success(data.message);
                      setTimeout(() => {
                        setLoad("1");
                        navigate("/");
                      }, 2000);
                    } else {
                      toast.error(data.message);
                    }
                  });
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
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}
export default Card;
