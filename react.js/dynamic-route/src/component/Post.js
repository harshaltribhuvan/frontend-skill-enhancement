import "./Post.css";
import { Link } from "react-router-dom";

const Post = ({ userId, body, title, id }) => {
  return (
    <div className="post__container">
      {/* <h5>{userId}</h5> */}
      <h3>{title}</h3>
      <p>{body}</p>
      <Link to={`/post/${id}`}>Read More..</Link>
    </div>
  );
};

export default Post;
