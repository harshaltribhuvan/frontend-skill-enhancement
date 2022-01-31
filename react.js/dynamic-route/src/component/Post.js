import "./Post.css";

const Post = ({ key, userId, body, title }) => {
  return (
    <div key={key} className="post__container">
      <h5>{userId}</h5>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};

export default Post;
