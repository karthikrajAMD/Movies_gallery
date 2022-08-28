import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Addmovie() {
  const [addfilm, setAddfilm] = useState({});
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [img, setImg] = useState("");
  const [descrip, setDescrip] = useState("");
  const [trailer, setTrailer] = useState("");
  const navigate = useNavigate();
  // const Addmovie = (newdata) => {
  //   fetch("https://6301d5f39a1035c7f807c7e5.mockapi.io/movies", {
  //     method: "POST",
  //     header: "content",
  //     body: JSON.stringify(newdata),
  //   });
  //   navigate("/");
  // };

  return (
    <>
      <div className="add-movie ">
        <div className="inputtext ">
          <TextField
            // className="col-10"
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
            // Addmovie(newdata);
            // setNewmovie([...newmovie, newdata]);
            fetch("https://6301d5f39a1035c7f807c7e5.mockapi.io/movies", {
              method: "POST",

              body: JSON.stringify(newdata),
              headers: {
                "Content-Type": "application/json",
              },
            })
              .then((res) => res.json())
              .then(() => navigate("/"));
          }}
        >
          Add Movie
        </Button>
      </div>
    </>
  );
}
export default Addmovie;
