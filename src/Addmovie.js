import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { API } from "./api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
function Addmovie() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [img, setImg] = useState("");
  const [descrip, setDescrip] = useState("");
  const [trailer, setTrailer] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <div className="add-movie ">
        <div className="inputtext ">
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            // className="col-10"
            id="outlined-basic"
            label="Rating"
            type="number"
            variant="outlined"
            onChange={(e) => setRating(e.target.value)}
          />
          <TextField
            // className="col-10"
            id="outlined-basic"
            label="Poster"
            variant="outlined"
            onChange={(e) => setImg(e.target.value)}
          />
          <TextField
            // className="col-10"
            id="outlined-basic"
            label="Trailer URL"
            variant="outlined"
            onChange={(e) => setTrailer(e.target.value)}
          />
          <TextField
            // className="col-10"
            id="outlined-basic"
            label="Description"
            variant="outlined"
            onChange={(e) => setDescrip(e.target.value)}
          />
        </div>
        <Button
          variant="contained"
          className="col-6 my-0 mx-auto"
          onClick={() => {
            const newdata = {
              name: name,
              rating: rating,
              image: img,
              descrip: descrip,
              trailer: trailer,
            };

            fetch(`${API}/movies`, {
              method: "POST",

              body: JSON.stringify(newdata),
              headers: {
                "Content-Type": "application/json",
              },
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.status === 200) {
                  toast.success(data.message);
                  setTimeout(() => {
                    navigate("/");
                  }, 2000);
                } else {
                  toast.error(data.message);
                }
              });
          }}
        >
          Add Movie
        </Button>
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
export default Addmovie;
