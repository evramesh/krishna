import { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Profile from "./components/Profile";
import Navbar from "./components/Header";
import VideoEdit from "./components/VideoEditing";
import Graphics from "./components/graphics";
import ThreeD from "./components/threed";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/video" component={VideoEdit} />
          <Route exact path="/graphics" component={Graphics} />
          <Route exact path="/threed" component={ThreeD} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
