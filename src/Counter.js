import { useState } from "react";
import "./style.css";
function Counter() {
  const [like, setLike] = useState("0");
  const [dislike, setDislike] = useState("0");
  return (
    <>
      <div className="like-dislike">
        <button
          onClick={() => {
            setLike(+like + 1);
          }}
        >
          👍 {like}
        </button>
        <button
          onClick={() => {
            setDislike(+dislike + 1);
          }}
        >
          👎{dislike}
        </button>
      </div>
    </>
  );
}
export default Counter;
