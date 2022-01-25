import "./css/MainComponent.css";
import { useParams } from "react-router-dom";
const Post = () => {
  const { category } = useParams();
  return (
    <div className="post">
      <h1>Post is about "{category}"</h1>
    </div>
  );
};

export default Post;
