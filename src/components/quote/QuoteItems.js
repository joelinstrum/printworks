import { Fragment } from "react";
import QuoteItem from "./QuoteItem";

const QuoteItems = ({ category, label, items, isEdit }) => {
  const renderNewQuoteItem = () => {
    return <QuoteItem category={category} label={label} items={items} />;
  };

  const renderEditItems = () => {
    return <div>Edit this item</div>;
  };

  if (isEdit) {
    return renderEditItems();
  }

  return renderNewQuoteItem();
};

export default QuoteItems;
