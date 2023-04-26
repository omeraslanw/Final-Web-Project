import "./App.css";
import MyBar from "./components/MyBar";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Chat from "./components/Chat";
import ChatBox from "./components/ChatBox";

function App() {
  return (
    <Router>
      <MyBar />
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </Router>
  );
}
export default App;
