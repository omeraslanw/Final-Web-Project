import React, { useRef, useState } from "react";
import { db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import ChatBox from "./ChatBox";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

function SearchBox() {
  const [userEmail, setUserEmail] = useState("");
  const [user, setUser] = useState(null);
  const [room, setRoom] = useState(null);
  const roomRef = useRef(null);

  const handleSearch = async () => {
    const q = query(collection(db, "users"), where("email", "==", userEmail));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setUser(doc.data());
    });
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  }; // klavyedeki bilgiyi okur.

  return (
    <div className="search-box">
      <div className="search-form">
        <input
          onKeyDown={handleKey}
          onChange={(e) => setUserEmail(e.target.value)}
          type="text"
          placeholder="Bir sohbet odası aratın"
          value={userEmail}
        />
      </div>

      {user && (
        <div className="user-info">
          <span>Email: {user.email}</span>
        </div>
      )}
      <div id="room-btn">
        <a href="/chatbox">Odaya Gir</a>
      </div>
    </div>
  );
}

export default SearchBox;