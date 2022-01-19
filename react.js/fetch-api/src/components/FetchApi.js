import axios from "axios";
import { useEffect, useState } from "react";
import Post from "./Post.js";
import "./FetchApi.css";

const FetchApi = () => {
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
    <div className="fetch__container">
      {apiData.map((post) => (
        <Post
          key={post.id}
          userId={post.userId}
          title={post.title}
          body={post.body}
        />
      ))}
    </div>
  );
};

export default FetchApi;
