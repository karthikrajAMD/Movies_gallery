import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Editform from "./Editform";
export default function Editmovie() {
  const { id } = useParams();
  const [edit, setEdit] = useState();
  useEffect(() => {
    fetch(`https://6301d5f39a1035c7f807c7e5.mockapi.io/movies/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setEdit(data));
  }, []);

  return edit ? <Editform edit={edit} /> : "loading...";
}
