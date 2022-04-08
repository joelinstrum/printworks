import { useContext } from "react";
import QuoteContext from "./quote-context";

const QuoteSubmit = () => {
  const { saveQuote } = useContext(QuoteContext);

  return (
    <div className="Quote__submit">
      <button onClick={saveQuote}>Submit</button>
    </div>
  );
};

export default QuoteSubmit;
