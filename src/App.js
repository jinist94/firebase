import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Join from "./components/Join";
import Login from "./components/Login";
import UserStore from "./store/users";

function App() {
  return (
    <div className="App">
      <UserStore>
        <BrowserRouter>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/join">
            <Join />
          </Route>
        </BrowserRouter>
      </UserStore>
    </div>
  );
}

export default App;
