// import { useState } from "react";
import Card from "./sample_card";

import { Routes, Route, Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
function App() {
  const movie = [
    {
      name: "GOT",
      rating: 8.8,
      image:
        "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg",
      descrip:
        "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
    },
    {
      name: "Victorious",
      rating: 6.2,
      image:
        "https://www.themoviedb.org/t/p/original/4bXfaJXoiKOTPfb23Q9cuaNpE2x.jpg",
      descrip:
        "Aspiring singer Tori Vega navigates life while attending a performing arts high school called Hollywood Arts.",
    },
    {
      id: 3,
      name: "Breaking Bad",
      rating: 8.5,
      image:
        "https://m.media-amazon.com/images/M/MV5BMTczMTY0MTMzOV5BMl5BanBnXkFtZTcwNDQxMTk4Nw@@._V1_.jpg",
      descrip:
        "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
    },
    {
      name: "Squid Game",
      rating: 8.0,
      image:
        "https://m.media-amazon.com/images/M/MV5BYWE3MDVkN2EtNjQ5MS00ZDQ4LTliNzYtMjc2YWMzMDEwMTA3XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_FMjpg_UX1000_.jpg",
      descrip:
        "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits with deadly high stakes. A survival game that has a whopping 45.6 billion-won prize at stake.",
    },
    {
      name: "Money Heist",
      rating: 8.2,
      image:
        "https://m.media-amazon.com/images/M/MV5BODI0ZTljYTMtODQ1NC00NmI0LTk1YWUtN2FlNDM1MDExMDlhXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_FMjpg_UX1000_.jpg",
      descrip:
        "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.",
    },
    {
      name: "Harry Potter",
      rating: 7.6,
      image:
        "https://m.media-amazon.com/images/M/MV5BMzkyZGFlOWQtZjFlMi00N2YwLWE2OWQtYTgxY2NkNmM1NjMwXkEyXkFqcGdeQXVyNjY1NTM1MzA@._V1_.jpg",
      descrip:
        "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
    },
    {
      name: "The Flash",
      rating: 7.6,
      image:
        "https://m.media-amazon.com/images/M/MV5BMDIzNzYwNTctZWY4Mi00YjQ2LWI5YWYtMzdmNDgwMGI4Yzk1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
      descrip:
        "After being struck by lightning, Barry Allen wakes up from his coma to discover he's been given the power of super speed, becoming the Flash, and fighting crime in Central City.",
    },
    {
      name: "Strange Things",
      rating: 8.7,
      image:
        "https://m.media-amazon.com/images/M/MV5BMDRjYWI5NTMtZTYzZC00NTg4LWI3NjMtNmI3MTdhMWQ5MGJlXkEyXkFqcGdeQXVyNTg4MDc4Mg@@._V1_FMjpg_UX1000_.jpg",
      descrip:
        "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.",
    },
  ];
  const [newmovie, setNewmovie] = useState([...movie]);
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [img, setImg] = useState("");
  const [descrip, setDescrip] = useState("");

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <nav>
                <nav>
                  <Link className="link" to="/Add-Movie">
                    Add Movie
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
          }
        />
        <Route
          path="/Add-Movie"
          element={
            <>
              <Link className="link" to="/">
                Home
              </Link>

              <div className="add-movie">
                <div className="inputtext">
                  <TextField
                    id="outlined-basic"
                    label="Names"
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
                    const newdata = {
                      name: name,
                      rating: rating,
                      image: img,
                      descrip: descrip,
                    };
                    setNewmovie([...newmovie, newdata]);
                  }}
                >
                  Add Movie
                </Button>
              </div>
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
