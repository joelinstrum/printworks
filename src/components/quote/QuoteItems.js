import { useState, useEffect } from "react";
import QuoteItem from "./QuoteItem";

const QuoteItems = ({ category, label, items, isEdit }) => {
  const [numItems, setNumItems] = useState([""]);

  const addItem = () => {
    setNumItems((current) => [...current, ""]);
  };

  const renderNewQuoteItems = () => {
    return (
      <>
        {numItems &&
          numItems.map((item, i) => (
            <QuoteItem
              category={category}
              label={label}
              items={items}
              index={i}
            />
          ))}
        <div>
          <button onClick={addItem}>+ Add {label}</button>
        </div>
      </>
    );
  };

  const renderEditItems = () => {
    return <div>Edit this item</div>;
  };

  if (isEdit) {
    return renderEditItems();
  }

  return renderNewQuoteItems();
};

export default QuoteItems;
