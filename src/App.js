import Home from "./Home";
import { useState } from "react";
import Addmovie from "./Addmovie";
import { Routes, Route } from "react-router-dom";
import { AppBar, Button, Toolbar } from "@mui/material";
import { useNavigate, Navigate } from "react-router-dom";
import Moviedetails from "./Moviedetails";
import Editmovie from "./Editmovie";
import { BasicForm } from "./form";
import { Context } from "./context";
function App() {
  const [reload, setLoad] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Button
            color="inherit"
            onClick={() => {
              navigate("/");
            }}
          >
            HOME
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              navigate("/Add-Movie");
            }}
          >
            Add Movie
          </Button>
        </Toolbar>
      </AppBar>
      <Context.Provider value={[reload, setLoad]}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Add-Movie" element={<Addmovie />} />
          <Route path="/:id" element={<Moviedetails />} />
          <Route path="/edit/:id" element={<Editmovie />} />
          <Route path="/form" element={<BasicForm />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </Context.Provider>
    </>
  );
}

export default App;
