import { useState, useEffect } from "react";
import "./Support.css";
import useFetch from "../../hooks/useFetch";

const Support = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  const { apiMakeCall } = useFetch();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      apiMakeCall("http://localhost:3000/support/", "POST", formData);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <div className="support-page">
      <div className="supportImg">
        <div className="flex">
          <p>ANY PROBLEMS? </p>
          <p>WE WILL FIX IT</p>
        </div>
      </div>

      <form className="supportForm">
        <label>E-mail</label>
        <input
          type="text"
          value={formData.email}
          name="email"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <label>Message</label>
        <textarea
          type="text"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        />
        <button className="submitBtn" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Support;
