import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { API } from "./api";
import Editform from "./Editform";
export default function Editmovie() {
  const { id } = useParams();
  const [edit, setEdit] = useState();
  useEffect(() => {
    fetch(`${API}/movies/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setEdit(data.movieExist);
        console.log(data);
      });
  }, []);

  return edit ? <Editform edit={edit} /> : "loading...";
}
