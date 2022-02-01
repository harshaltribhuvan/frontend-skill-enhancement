import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Card.css";

const Card = () => {
  const { id } = useParams();

  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchSingleData = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    setApiData(data);
    // console.log(apiData);
    setLoading(true);
  };

  useEffect(() => {
    fetchSingleData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="card__container">
      {loading ? (
        <div className="card">
          <h3>{apiData.userId}</h3>
          <h1>{apiData.title}</h1>
          <h5>{apiData.body}</h5>
        </div>
      ) : (
        <h1
          className="loading"
          style={{
            textAlign: "center",
            marginTop: "300px",
            color: "darkgoldenrod",
          }}
        >
          Loading...
        </h1>
      )}
    </div>
  );
};

export default Card;
