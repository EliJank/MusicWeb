import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import "./Cart.css";
import { Link } from "react-router-dom";
import Page404 from "../404page/Page404";
import Login from "../user/Login";
import Loader from "../../components/Loader";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const { data, loading, apiMakeCall, error } = useFetch();
  const [quantity, setQuantity] = useState({});
  const token = localStorage.getItem("token");

  useEffect(() => {
    apiMakeCall(`http://localhost:3000/cart/`, "GET");
    console.log("DATA:", data);
    console.log("ERROR:", error);
    console.log("USER:", token);
  }, []);

  useEffect(() => {
    if (error) return;

    if (data) {
      setCartItems(data);
    }
  }, [data, error]);

  if (error && !token) {
    return <Login />;
  }

  if (error && token) {
    return <Page404 />;
  }

  const handleRemoveItem = (id) => {
    apiMakeCall(`http://localhost:3000/cart/${id}`, "DELETE");
    window.location.reload();
  };

  const updateQuantity = async (id, quantity) => {
    const response = await apiMakeCall(
      `http://localhost:3000/cart/${id}`,
      "PATCH",
      { quantity },
    );
    window.location.reload();
  };

  return (
    <>
      {loading && <Loader />}

      {!loading && cartItems.length === 0 && (
        <div className="empty-cart">
          <h2>Your cart is empty</h2>
         
          <Link to="/events" className="empty-order-btn">
            Browse Events
          </Link>
          <Link to="/merch" className="empty-order-btn">
            Browse Merch
          </Link>
        </div>
      )}

      {!loading && cartItems.length > 0 && (
        <div className="background">
          <div className="cart-page">
            <h1>Your Cart</h1>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item._id} className="cart-item">
                  <img src={item.url} alt={item.title} />
                  <div className="cart-item-details">
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <p className="cart-item-price">{item.price} EUR</p>
                    <label>Quantity:</label>
                    <input
                      type="number"
                      min="1"
                      value={quantity[item._id] || item.quantity}
                      onChange={(e) =>
                        setQuantity({
                          ...quantity,
                          [item._id]: e.target.value,
                        })
                      }
                    />
                    <div className="btn-cart">
                      <button
                        className="update-item"
                        onClick={() =>
                          updateQuantity(item._id, quantity[item._id])
                        }
                      >
                        Update
                      </button>
                      <button
                        className="remove-item"
                        onClick={() => handleRemoveItem(item._id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/checkout" className="order-btn-cart">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
