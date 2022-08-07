import { useState } from "react";

import IconButton from "@mui/material/IconButton";

import "./style.css";
function Counter() {
  const [like, setLike] = useState("0");
  const [dislike, setDislike] = useState("0");
  return (
    <>
      <div className="like-dislike">
        <IconButton
          onClick={() => {
            setLike(+like + 1);
          }}
        >
          👍 {like}
        </IconButton>
        <IconButton
          onClick={() => {
            setDislike(+dislike + 1);
          }}
        >
          👎{dislike}
        </IconButton>
      </div>
    </>
  );
}
export default Counter;
