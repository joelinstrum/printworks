import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./containers/dashboard";
import Quote from "./containers/quote";

export default () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </Router>
  );
};
