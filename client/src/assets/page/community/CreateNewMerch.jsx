import { useState } from "react";
import "./CreateNewMerch.css";
import useFetch from "../../hooks/useFetch";

const CreateNewMerch = () => {
      const { apiMakeCall } = useFetch();
  const [merch, setMerch] = useState({
    title: "",
    group: "",
    description: "",
    url: "",
    price: ""
  });


  const handleChange = (e) => {
    setMerch({
      ...merch,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("New merch:", merch);
try {

  const response = await apiMakeCall(
    `http://localhost:3000/merch/create`, "POST",
    merch
  );
  navigate("/merch/");
} catch (error) {
    console.log(error);
    alert("Try one more time")
}
  };


  return (
    <div className="create-merch-page">
      <div className="merch-form-card">
        <h1>Create New Merch</h1>
        <form onSubmit={handleSubmit}>
          <input
            name="title"
            placeholder="Product name"
            value={merch.title}
            onChange={handleChange}
          />
          <input
            name="artist"
            placeholder="Artist / Band name"
            value={merch.group}
            onChange={handleChange}
          />
          <input
            name="url"
            placeholder="Product image URL"
            value={merch.url}
            onChange={handleChange}
          />
            <input
              type="number"
              name="price"
              placeholder="Price (€)"
              value={merch.price}
              onChange={handleChange}
            />
          <textarea
            name="description"
            placeholder="Describe your merch..."
            value={merch.description}
            onChange={handleChange}
          />
          <button className="create-btn-merch" onClick={() => handleSubmit }>
            Publish Merch
          </button>


        </form>

      </div>

    </div>
  );
};


export default CreateNewMerch;