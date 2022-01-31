import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Post from "./Post";
import "./MainContainer.css";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  console.log(navigate);
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setApiData(data);
    console.log(apiData);
  };

  useEffect(() => {
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="home">
      <h1>Home Page</h1>

      <div className="fetch__container">
        {apiData.map((post) => (
          <Post
            onClick={() => navigate(`/card/${post.id}`)}
            key={post.id}
            userId={post.userId}
            title={post.title}
            body={post.body}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
