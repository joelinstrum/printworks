import { Link } from "react-router-dom";
import "./Menu.scss";

const menuItems = [
  { link: "/dashboard", label: "Dashboard" },
  { link: "/quote", label: "+Create Quote" },
  {
    link: null,
    label: "-Clear Data",
    callBack: () => {
      window.localStorage.clear();
    },
  },
];

const Menu = () => {
  return (
    <div className="App__container Menu__background">
      <div className="Menu__container App__interior">
        {menuItems.map((item) => (
          <div key={item.label}>
            {item.link && <Link to={item.link}>{item.label}</Link>}
            {item.callBack && <span onClick={item.callBack}>{item.label}</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
