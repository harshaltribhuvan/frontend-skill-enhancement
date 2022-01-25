import { useLocation } from "react-router-dom";
import "./css/MainComponent.css";

const Login = () => {
  const location = useLocation();
  return (
    <div className="login">
      <h1>Login Page</h1>
      <p>{location.state.st}</p>
    </div>
  );
};

export default Login;
