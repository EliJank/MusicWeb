import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { apiMakeCall, loading, error } = useFetch();

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    age: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.name === "age" ? Number(e.target.value) : e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const response = await apiMakeCall(
      "http://localhost:3000/register",
      "POST",
      formData
    );
    if (response?.success) {
      navigate("/login");
    } else {
      console.log("Register failed", response);
    }
} catch (error) {
  console.log("Error occurred during registration", error);
}
};

  return (
    <div className="signup-page">
      <h2>Sign Up</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Surname:</label>

          <input
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Age:</label>

          <input
            type="number"
            name="age"
            min="16"
            max="90"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Email:</label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Password:</label>

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default SignUp;
