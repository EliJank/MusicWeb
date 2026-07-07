import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { apiMakeCall, error } = useFetch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await apiMakeCall("http://localhost:3000/login", "POST", {
        email,
        password,
      });
      console.log("Login response:", response);

      if (response?.success) {
        localStorage.setItem("token", response.token);
        navigate("/");
      } else {
        alert(response?.message || "Login failed");
      }
    } catch (error) {
      alert("you are not logged in");
      console.log(error);
    }
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            required
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
        <div>
          <Link className="register-link" to="/register">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};
export default Login;
