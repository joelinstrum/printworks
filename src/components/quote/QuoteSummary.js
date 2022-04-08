import { useContext, Fragment, useState, useEffect } from "react";
import QuoteContext from "./quote-context";
import { isEmpty } from "../../lib/helpers";

const QuoteSummary = () => {
  const salesTax = 0.07;
  const { quoteOrder } = useContext(QuoteContext);
  const [subTotal, setSubTotal] = useState();
  const [summaryOrder, setSummaryOrder] = useState();

  useEffect(() => {
    if (quoteOrder) {
      let _quoteOrder = [];
      let subtotal = 0;
      Object.entries(quoteOrder).map((i) => {
        const item = i[1];
        const cost = parseInt(item.units) * parseFloat(item.cost);
        console.log(`${item.units} * ${item.cost} = ${cost}`);
        subtotal += parseFloat(cost);
        _quoteOrder.push({
          name: item.item,
          units: item.units,
          cost,
          price: item.cost,
        });
      });
      setSubTotal(subtotal);
      setSummaryOrder(_quoteOrder);
    }
  }, [quoteOrder]);

  const renderQuoteSummary = () => (
    <div className="Quote__summary_container">
      <div className="Quote__summary_title">Quote Summary</div>
      <table className="Table__summary">
        <tbody>
          <tr>
            <th>Item</th>
            <th>Units</th>
            <th>Price</th>
          </tr>
          {summaryOrder &&
            summaryOrder.map((item) => (
              <tr key={item.name}>
                <td>{item.name}</td>
                <td>
                  {item.units}@{item.price}
                </td>
                <td>${parseFloat(item.cost).toFixed(2)}</td>
              </tr>
            ))}
          <tr>
            <td colSpan={3} className="Quote__summary_line" />
          </tr>
          <tr>
            <td colSpan={2}>Subtotal: </td>
            <td>${parseFloat(subTotal).toFixed(2)}</td>
          </tr>
          <tr>
            <td colSpan={2}>Tax: </td>
            <td>{(salesTax * parseFloat(subTotal)).toFixed(2)}</td>
          </tr>
          <tr>
            <td colSpan={2}>Total: </td>
            <td>
              {(salesTax * parseFloat(subTotal) + parseFloat(subTotal)).toFixed(
                2
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  return <Fragment>{!isEmpty(quoteOrder) && renderQuoteSummary()}</Fragment>;
};

export default QuoteSummary;
