import { useState } from "react";

import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";

import "./style.css";
function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
    <>
      <div className="like-dislike">
        <IconButton
          onClick={() => setLike(+like + 1)}
          className="bt-sz-lg"
          aria-label="like button"
          color="primary"
        >
          <Badge badgeContent={like} color="primary">
            👍
          </Badge>
        </IconButton>
        <IconButton
          onClick={() => setDislike(+dislike + 1)}
          className="bt-sz-lg"
          aria-label="like button"
          color="error"
        >
          <Badge badgeContent={dislike} color="primary">
            👎
          </Badge>
        </IconButton>
      </div>
    </>
  );
}
export default Counter;
