import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Features from "./pages/Features";
import Demos from "./pages/Demos";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="decoration">
        <div className="decoration--white"></div>
        <div className="decoration--grey"></div>
      </div>      
      <div>
        <div className="nav-bar-container">
        <NavBar />
        </div>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/features">
            <Features />
          </Route>
          <Route path="/demos">
            <Demos />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
