import "./App.css";
import FetchApi from "./components/FetchApi";

function App() {
  return (
    <div className="app">
      <h1>
        Fetching API using <span className="axios">Axios</span>
      </h1>
      <FetchApi />
    </div>
  );
}

export default App;
