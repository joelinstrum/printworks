import { useEffect } from "react";
import { Loader } from "../../components";
import { useQuery } from "../../lib";
import "./QuoteList.scss";

const QuoteList = () => {
  const { isLoading, data } = useQuery("orders");
  return (
    <Loader isLoading={isLoading}>
      <div className="App__interior Page__content">
        <div>
          <div>Orders</div>
          <table className="QuoteList__table">
            <tbody>
              <tr>
                <th>Order Date</th>
                <th>User</th>
                <th>Total</th>
              </tr>
              {data &&
                data.map((obj) => {
                  return Object.keys(obj).map((key) => {
                    const item = obj[key];
                    return (
                      <tr key={item.orderDate}>
                        <td>{item.orderDate}</td>
                        <td>{item.user}</td>
                        <td>{item.total}</td>
                      </tr>
                    );
                  });
                })}
            </tbody>
          </table>
        </div>
      </div>
    </Loader>
  );
};

export default QuoteList;
