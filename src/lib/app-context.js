import { createContext } from "react";

const initialValues = {
  loggedIn: false,
  user: "",
};

const AppContext = createContext(initialValues);

export default AppContext;
