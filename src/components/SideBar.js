import React from "react";
import ChatNav from "./ChatNav";
import SearchBox from "./SearchBox";

function SideBar() {
  return (
    <div className="sidebar">
      <ChatNav />
      <SearchBox />
    </div>
  );
}

export default SideBar;
