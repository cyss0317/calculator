import * as React from "react";

const CalculationPage = () => {
  const [price, setPrice] = React.useState(0);
  const [qty, setQty] = React.useState(0);
  const [symbol, setSymbol] = React.useState("*");
  const [totalPrice, setTotalPrice] = React.useState(0);

  const calculateTotal = async (price, qty, symbol) => {
    await setPrice(price);
    await setSymbol(symbol);
    await setQty(qty);
    switch (symbol) {
      case "+":
        result = price + qty;
        break;
      case "-":
        result = price - qty;
        break;
      case "/":
        result = price / qty;
        break;
      default:
        result = price * qty;
        break;
    }
    console.log(symbol);
    var result;

    await setTotalPrice(result);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>price</th>
            <th>+, - , * , /</th>
            <th>qty</th>
            <th>total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                type="number"
                name="price"
                value={price}
                onChange={async (e) =>
                  await setTotalPrice(calculateTotal(e.target.value, qty, symbol))
                }
              />
            </td>
            <td>
              <input
                type="text"
                minLength="1"
                maxLength="1"
                name="qty"
                value={symbol}
                onChange={async (e) =>
                  await setTotalPrice(
                    calculateTotal(price, qty, e.target.value)
                  )
                }
              />
            </td>
            <td>
              <input
                type="number"
                name="qty"
                value={qty}
                onChange={async (e) =>
                  await setTotalPrice(calculateTotal(price, e.target.value, symbol))
                }
              />
            </td>
            <td>
              <input type="number" readOnly name="total" value={totalPrice} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CalculationPage;
