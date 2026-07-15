import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import Page404 from "../404page/Page404";
import Loader from "../../components/Loader";
import "./MerchPage.css";
import { useNavigate } from "react-router-dom";

const MerchPage = () => {
  const [oneMerch, setOneMerch] = useState(null);
  const { data, loading, apiMakeCall, error } = useFetch();
  const [quantity, setQuantity] = useState(1);

  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    apiMakeCall(`http://localhost:3000/merch/${id}`);
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (error) return;

    if (data) {
      setOneMerch(data);
    }
  }, [data, error]);

  if (error) {
    return <Page404 />;
  }

  const handleAddToCart = async () => {
    console.log("token:", token);
    if (!token) {
      alert("Please log in to add items to your cart.");
      navigate("/login");
      return;
    }
    const response = await apiMakeCall("http://localhost:3000/cart/", "POST", {
      itemId: oneMerch._id,
      title: oneMerch.title,
      description: oneMerch.description,
      url: oneMerch.url,
      price: oneMerch.price,
      quantity: Number(quantity),
    });
    console.log("response:", response);
    navigate("/cart/");
    window.location.reload();
  };
  return (
    <>
      {loading && <Loader />}

      {!loading && oneMerch && (
        <div className="merch-page">
          <div className="merch-hero">
            <img src={oneMerch.url} className="merch-image" />
          </div>
          <div className="merch-details">
            <h1>{oneMerch.title}</h1>
            <div className="merch-info">
              <p className="merch-group">
                <strong>Group:</strong> {oneMerch.group}
              </p>
              <p className="merch-price">
                <strong>Price:</strong> {oneMerch.price} EUR
              </p>
              <div className="merch-description">
                <h2>About Product:</h2>
                <p>{oneMerch.description}</p>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  min="1"
                  max="3"
                />
              </div>
              <button className="merch-order-btn" onClick={handleAddToCart}>
                Order Products Now
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MerchPage;
