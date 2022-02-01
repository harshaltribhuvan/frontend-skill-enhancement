import axios from "axios";
import React, { useEffect, useState } from "react";
import Post from "./Post";
import "./MainContainer.css";
import "./Home.css";

const Home = () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setApiData(data);
      // console.log(apiData);
      setLoading(true);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="home">
      <h1>
        <span style={{ color: "darkgoldenrod", fontFamily: "cursive" }}>
          Home
        </span>{" "}
        Page
      </h1>

      <div className="fetch__container">
        {/* {loading ? apiData : <h1>Loading...</h1>} */}
        {loading ? (
          apiData.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              userId={post.userId}
              title={post.title}
              body={post.body}
            />
          ))
        ) : (
          <h5
            style={{
              textAlign: "center",
              marginBottom: "300px",
              color: "darkgoldenrod",
            }}
          >
            Loading...
          </h5>
        )}
      </div>
    </div>
  );
};

export default Home;
