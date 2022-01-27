import "./app.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Reports from "./pages/Reports";
import Messages from "./pages/Messages";
import Team from "./pages/Team";
import Support from "./pages/Support";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/reports" component={Reports} />
          <Route path="/products" component={Products} />
          <Route path="/messages" component={Messages} />
          <Route path="/team" component={Team} />
          <Route path="/support" component={Support} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
