import { useContext } from "react";
import "./Header.scss";
import { FaPrint } from "react-icons/fa";
import AppContext from "../../lib/app-context";

const Header = ({ title }) => {
  if (title) {
    document.title = title;
  }

  const { userId } = useContext(AppContext);

  return (
    <div className="App__container">
      <div className="Header__container">
        <div className="App__interior Header__title">
          <div>
            <FaPrint />
          </div>
          <div>Print Works</div>
          <div className="Header__loggedIn Page__link">{userId}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
