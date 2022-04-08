import { useContext, useState, useEffect } from "react";
import { AutofillDropdown } from "../";
import QuoteContext from "./quote-context";

const QuoteItem = ({ items, category, label }) => {
  const index = 1;
  const { updateQuoteOrder } = useContext(QuoteContext);
  const [units, setUnits] = useState("");
  const [item, setItem] = useState("");
  const [itemOrderObject, setItemOrderObject] = useState({});

  const getCost = (itemName) => items?.find((i) => i.name === itemName)?.cost;

  const updateItemOrder = (i, v) => {
    setItem(v);
  };

  useEffect(() => {
    setItemOrderObject({
      name: `${category}-${index}`,
      key: `${category}-${index}`,
      item,
      units,
      cost: getCost(item),
    });
  }, [item, units]);

  useEffect(() => {
    if (itemOrderObject.units && itemOrderObject.item) {
      updateQuoteOrder(itemOrderObject);
    }
  }, [itemOrderObject]);

  return (
    <table className="Table__form">
      <tbody>
        <tr>
          <td>
            <label>{label}:</label>
          </td>
          <td>
            <AutofillDropdown
              items={items}
              name={`${category}-${index}`}
              onSelect={updateItemOrder}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label>Number of units:</label>
          </td>
          <td>
            <input
              name={`${category}-${index}-units`}
              size="5"
              onChange={(e) => setUnits(e.target.value)}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default QuoteItem;
