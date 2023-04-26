import { useSelector, useDispatch } from "react-redux";
import { auth } from "../firebase";
import { Button } from "reactstrap";
import { signOut } from "firebase/auth";
import { logout } from "../stores/auth";

function ChatNav() {
  const dispatch = useDispatch();
  const handleLogout = async () => {
    await signOut(auth);
    dispatch(logout());
  };
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="chat-nav">
      <div className="account-info">
        <div className="account-title">
          <span>Kullanıcı Email: {user.email}</span>
        </div>

        <Button onClick={handleLogout} id="logout-btn">
          ÇıkışYap
        </Button>
      </div>
    </div>
  );
}

export default ChatNav;
