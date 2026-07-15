import { useState, useEffect } from "react";
import "./Checkout.css";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [items, setItems] = useState([]);
  const { data, apiMakeCall, error } = useFetch();
  const [totalPrice, setTotalPrice] = useState(0);
  const token = localStorage.getItem("token");
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    card: "",
  });

  useEffect(() => {
    apiMakeCall(`http://localhost:3000/cart/`, "GET");
    console.log("DATA:", data);
    console.log("ERROR:", error);
    console.log("USER:", token);
  }, []);

  useEffect(() => {
    if (error) return;

    if (data) {
      setItems(data);
    }
  }, [data, error]);

  if (error && token) {
    return <Page404 />;
  }

  useEffect(() => {
    const total = items.reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0);
    setTotalPrice(total);
  }, [items]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleRemoveItem = (id) => {
    apiMakeCall(`http://localhost:3000/cart/${id}`, "DELETE");
    window.location.reload();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Order:", form);

    // send order to backend

  };


  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <div className="checkout-form">
          <h1>Checkout</h1>

          <form onSubmit={handleSubmit}>
            <input
              name="name"
              placeholder="Full name"
              value={form.name}
              onChange={handleChange}
            />

            <input
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />

            <input
              name="address"
              placeholder="Address"
              value={form.address}
              onChange={handleChange}
            />

            <input
              name="city"
              placeholder="City"
              value={form.city}
              onChange={handleChange}
            />

            <input
              name="zip"
              placeholder="ZIP code"
              value={form.zip}
              onChange={handleChange}
            />

            <input
              name="card"
              placeholder="Card number"
              value={form.card}
              onChange={handleChange}
            />

            <Link clickOn= {() => {handleSubmit}} to="/thankyou" className="purchase-done">Place Order</Link>
          </form>
        </div>

        <div className="order-summary">
          <h2>Your Order</h2>

          <div className="checkout-price">
            <p>Items total:</p>
            <span>{totalPrice} EUR</span>
          </div>

          <hr />

          <div className="checkout-item">
            <p>Your Items:</p>

            {items &&
              items.map((item) => (
                <div key={item._id} className="checkout-card">
                  <img src={item.url} />
                  <div className="item-descr">
                    <span>{item.title}</span>
                    <p>{item.price} EUR</p>
                    <button
                      className="remove-item"
                      onClick={() => handleRemoveItem(item._id)}
                    >
                      DELETE
                    </button>
                  </div>
                </div>
              ))}
          </div>

          <hr />
{ items.length > 10 && (
          <div className="checkout-price">
            <p>Items total:</p>
            <span>{totalPrice} EUR</span>
          </div>
)
}
        </div>
      </div>
    </div>
  );
};


export default Checkout;
