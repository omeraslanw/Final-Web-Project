import React, { useRef, useState } from "react";
import ChatBox from "./ChatBox";
import { Button } from "reactstrap";

function SearchBox() {
  const [room, setRoom] = useState(null);
  const roomRef = useRef(null);

  return (
    <div className="search-box">
      {room ? (
        <ChatBox />
      ) : (
        <div className="search-form">
          <input
            ref={roomRef}
            type="text"
            placeholder="Bir sohbet odası aratın"
          />
          <Button onClick={() => setRoom(roomRef.current.value)}>
            Odaya Gir
          </Button>
        </div>
      )}
    </div>
  );
}

export default SearchBox;
