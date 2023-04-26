import {
  updateDoc,
  Timestamp,
  doc,
  arrayUnion,
  onSnapshot,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import { useSelector } from "react-redux";
import { db } from "../firebase";

function SendMessage() {
  const [posts, setPosts] = useState([]);
  const { user } = useSelector((state) => state.auth);
  const [newMessage, setNewMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(newMessage);
    if (newMessage === "") return;

    await updateDoc(doc(db, "posts", user.uid), {
      posts: arrayUnion({
        user,
        newMessage,
        createdAt: Timestamp.now(),
      }),
    });
    setNewMessage("");
  };

  useEffect(() => {
    const unSub = async () => {
      await onSnapshot(doc, (db, "posts", user.uid), (doc) => {
        if (doc.exists()) {
          setPosts(doc.data().posts);
        }
      });
    };
    return () => {
      unSub();
    };
  }, [user.uid]);

  return (
    <div>
      <div className="newMessage">
        {posts.map((post, index) => {
          return (
            <div key={index}>
              <span>
                {post.user.email}: {post.newMessage}
              </span>
            </div>
          );
        })}
      </div>

      <form onSubmit={handleSubmit} className="sendmessage">
        <input
          onChange={(e) => setNewMessage(e.target.value)}
          type="text"
          placeholder="Bir mesaj yolla"
        />
        <div className="send-btn">
          <Button type="submit">Yolla</Button>
        </div>
      </form>
    </div>
  );
}

export default SendMessage;
