import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { API } from "./api";
import Button from "@mui/material/Button";
export default function Editform({ edit }) {
  const [name, setName] = useState(edit.name);
  const [rating, setRating] = useState(edit.rating);
  const [img, setImg] = useState(edit.image);
  const [descrip, setDescrip] = useState(edit.descrip);
  const [trailer, setTrailer] = useState(edit.trailer);
  const navigate = useNavigate();
  return (
    <div className="add-movie ">
      <div className="inputtext ">
        <TextField
          value={name}
          label="Movie Name"
          onChange={(e) => setName(e.target.value)}
          id="outlined-basic"
          variant="outlined"
        />

        <TextField
          value={rating}
          id="outlined-basic"
          label="Rating"
          type="number"
          variant="outlined"
          onChange={(e) => setRating(e.target.value)}
        />
        <TextField
          value={img}
          id="outlined-basic"
          label="Poster"
          variant="outlined"
          onChange={(e) => setImg(e.target.value)}
        />
        <TextField
          value={trailer}
          id="outlined-basic"
          label="Trailer URL"
          variant="outlined"
          onChange={(e) => setTrailer(e.target.value)}
        />
        <TextField
          value={descrip}
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
          const updatedata = {
            name: name,
            rating: rating,
            image: img,
            descrip: descrip,
            trailer: trailer,
          };

          fetch(`${API}/movies/${edit._id}`, {
            method: "PUT",

            body: JSON.stringify(updatedata),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then(() => navigate("/"));
        }}
      >
        Save
      </Button>
    </div>
  );
}
