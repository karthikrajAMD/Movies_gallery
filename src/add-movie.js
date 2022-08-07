import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./style.css";
function AddMovie({ movielist, newmov }) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [img, setImg] = useState("");
  const [descrip, setDescrip] = useState("");
  const newdata = {
    name: name,
    rating: rating,
    image: img,

    descrip: descrip,
  };

  return (
    <>
      <Link className="link" to="/">
        Home
      </Link>

      <div className="add-movie">
        <div className="inputtext">
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            id="outlined-basic"
            label="Rating"
            variant="outlined"
            onChange={(e) => setRating(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Poster"
            variant="outlined"
            onChange={(e) => setImg(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Description"
            variant="outlined"
            onChange={(e) => setDescrip(e.target.value)}
          />
        </div>

        <Button
          variant="contained"
          onClick={() => {
            newmov.push(newdata);
            movielist(() => {
              movielist([...newmov]);
            });
          }}
        >
          Add Movie
        </Button>
      </div>
    </>
  );
}

export default AddMovie;