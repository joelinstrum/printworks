import { useState, useContext } from "react";
import Modal from "../modal";
import "./Login.scss";
import AppContext from "../../lib/app-context";

const Login = ({ children }) => {
  const { loggedIn, setLoggedIn, setGlobalUser } = useContext(AppContext);

  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");

  const login = () => {
    setGlobalUser(userEmail, userName);
    setLoggedIn(true);
  };

  if (!loggedIn) {
    return (
      <Modal>
        <div className="Login__container">
          <div className="Login__content">
            <div>Please log in to continue</div>
            <div>
              <input
                type="text"
                placeholder="guest@guest.com"
                size="40"
                onChange={(e) => setUserEmail(e.target.value)}
              ></input>
            </div>
            <div>
              <input
                type="text"
                placeholder="Your Name"
                size="40"
                onChange={(e) => setUserName(e.target.value)}
              ></input>
            </div>
            <div>
              <button className="primaryButton" onClick={login}>
                Login
              </button>
            </div>
          </div>
        </div>
      </Modal>
    );
  } else {
    return <>{children}</>;
  }
};

export default Login;
