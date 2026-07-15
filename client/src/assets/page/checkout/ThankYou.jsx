import { useNavigate } from "react-router-dom";
import "./ThankYou.css";

const ThankYou = () => {
    const navigate = useNavigate();
    return (
        <>
          <div className="thank-page">
      <div className="thank-card">

        <div className="success-icon">
          ✓
        </div>

        <h1>Thank You!</h1>

        <p>
          Your order has been successfully placed.
          We have sent your confirmation details to your email.
        </p>
        <div className="order-info">
          <p>
            Order number:
            <strong> #123456</strong>
          </p>

          <p>
            Status:
            <strong> Confirmed</strong>
          </p>
        </div>

        <button onClick={() => navigate("/")}>
          Back to Home
        </button>

      </div>
    </div>
        </>
    )
}
export default ThankYou;