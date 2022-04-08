import { useState } from "react";
import AppContext from "../../lib/app-context";
import Routes from "../../Routes";
import "./App.scss";

const App = () => {
  const [userId, setUserId] = useState(
    JSON.parse(localStorage.getItem("userId"))
  );
  const [userName, setUsername] = useState(
    JSON.parse(localStorage.getItem("userName"))
  );
  const [loggedIn, setLoggedIn] = useState(userName && userId);

  const setGlobalUser = (_userId, _userName) => {
    setUserId(_userId);
    setUsername(_userName);
    window.localStorage.setItem("userId", JSON.stringify(_userId));
    window.localStorage.setItem("userName", JSON.stringify(_userName));
  };

  const value = {
    loggedIn,
    setLoggedIn,
    userId,
    userName,
    setGlobalUser,
  };

  return (
    <AppContext.Provider value={value}>
      <Routes />
    </AppContext.Provider>
  );
};

export default App;
