import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";

class App extends React.Component {
  render() {
    return (
      <div>
        <Login/>
        <Router>
          <Switch>
            <Route path={"/bob"} component={() => <div>bob</div>}/>
            <Route path={"/hello"} component={() => <div>hello world</div>}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;