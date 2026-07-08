import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import "./AllMerch.css";
import Loader from "../../components/Loader.jsx";
import Page404 from "../Page404.jsx";
import MerchCard from "../../components/MerchCard.jsx";

const AllMerch = () => {
  const [merch, setMerch] = useState([]);
  const { data, loading, apiMakeCall, error } = useFetch();

  useEffect(() => {
    apiMakeCall("http://localhost:3000/merch/");
  }, []);

  useEffect(() => {
    if (error) return;

    if (data) {
      setMerch(data);
    }
  }, [data, error]);

  if (error) {
    return <Page404 />;
  }

  return (
    <>
      <div className="merchImg">
        <p>ORDER ARTISTS MERCH</p>
      </div>

      <h1 className="merchH">Merch</h1>
      <div className="cards">
        {loading && <Loader />}

        {!loading &&
          merch.map((item) => (
            <MerchCard
              key={item._id}
              id={item._id}
              title={item.title}
              photo={item.url}
              price={item.price}
              group={item.group}
            />
          ))}
      </div>
    </>
  );
};

export default AllMerch;
