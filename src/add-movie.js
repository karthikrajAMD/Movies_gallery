// import { useState } from "react";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import { Link } from "react-router-dom";
// import "./style.css";
// // import { Movie } from "@mui/icons-material";
// function AddMovie({
//   setName,
//   setRating,
//   setImg,
//   setDescrip,
//   name,
//   rating,
//   descrip,
//   img,
//   setNewmovie,
//   newmov,
// }) {
//   console.log(newmov);

//   return (
//     <>
//       <Link className="link" to="/">
//         Home
//       </Link>

//       <div className="add-movie">
//         <div className="inputtext">
//           <TextField
//             id="outlined-basic"
//             label="Names"
//             variant="outlined"
//             onChange={(e) => setName(e.target.value)}
//           />

//           <TextField
//             id="outlined-basic"
//             label="Rating"
//             variant="outlined"
//             onChange={(e) => setRating(e.target.value)}
//           />
//           <TextField
//             id="outlined-basic"
//             label="Poster"
//             variant="outlined"
//             onChange={(e) => setImg(e.target.value)}
//           />
//           <TextField
//             id="outlined-basic"
//             label="Description"
//             variant="outlined"
//             onChange={(e) => setDescrip(e.target.value)}
//           />
//         </div>
//         <Button
//           variant="contained"
//           onClick={() => {
//             const newdata = {
//               name: name,
//               rating: rating,
//               image: img,
//               descrip: descrip,
//             };
//             setNewmovie([...newmov, newdata]);
//           }}
//         >
//           Add Movie
//         </Button>
//       </div>
//     </>
//   );
// }

// export default AddMovie;
