import React from "react";
import { Header, Menu, QuoteList, Login } from "../../components";

const Dashboard = () => {
  return (
    <Login>
      <div>
        <Header title="Printworks: Dashboard" />
        <Menu />
        <QuoteList />
      </div>
    </Login>
  );
};

export default Dashboard;
