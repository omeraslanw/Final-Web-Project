import React, { useState } from "react";
import { useSelector } from "react-redux";

function Message() {
  const { user } = useSelector((state) => state.auth);
  //const { posts } = useSelector((state) => state.auth);
  const [posts, setPosts] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  return (
 <div className="messages">
     <div className="message">
        <div className="message-info">
          <div className="message-content">
            {posts?.map((post, index) => {
              return (
                <div key={index}>
                  <span>
                    {post.user.email}: {post.newMessage}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>  
    </div>
  );
}

export default Message;
