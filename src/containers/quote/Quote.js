import React from "react";
import { Header, Menu, QuoteForm, Login } from "../../components";

const Quote = () => {
  return (
    <Login>
      <div>
        <Header title="Printworks: Create a quote" />
        <Menu />
        <QuoteForm />
      </div>
    </Login>
  );
};

export default Quote;
