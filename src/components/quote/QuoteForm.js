import { useState, useEffect } from "react";
import { useQuery, postApi } from "../../lib";
import { Loader } from "../";
import QuoteItems from "./QuoteItems";
import QuoteSummary from "./QuoteSummary";
import QuoteContext from "./quote-context";
import QuoteSubmit from "./QuoteSubmit";
import "./Quote.scss";

const QuoteForm = ({ order }) => {
  const { data, isLoading } = useQuery("offerings");
  const [isEdit, setIsEdit] = useState(!!order);
  const [quoteOrder, setQuoteOrder] = useState({});
  const [savingForm, setSavingForm] = useState(false);

  const updateQuoteOrder = (lineItem) => {
    const newQuoteObj = {
      [lineItem.name]: lineItem,
    };
    setQuoteOrder((current) => ({
      ...current,
      ...newQuoteObj,
    }));
  };

  const saveQuote = async () => {
    setSavingForm(true);
    await postApi(quoteOrder);
    setSavingForm(false);
  };

  const value = {
    updateQuoteOrder,
    quoteOrder: order || quoteOrder,
    saveQuote,
  };

  return (
    <QuoteContext.Provider value={value}>
      <div className="App__interior">
        <Loader
          isLoading={isLoading || savingForm}
          message={"Loading products & services"}
        >
          <div className="Flex__columns">
            New quote:
            <div>
              <QuoteItems
                category={"product"}
                label={"Products"}
                items={data?.products}
                isEdit={isEdit}
              />
              <QuoteItems
                category={"material"}
                label={"Materials"}
                items={data?.materials}
                isEdit={isEdit}
              />
              <QuoteItems
                category={"service"}
                label={"Services"}
                items={data?.services}
                isEdit={isEdit}
              />
              <QuoteSubmit />
            </div>
            <QuoteSummary />
          </div>
        </Loader>
      </div>
    </QuoteContext.Provider>
  );
};

export default QuoteForm;
