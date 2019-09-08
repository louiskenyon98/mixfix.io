import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginSuccess from './components/Login/LoginSuccess';
import Splash from './components/Splash/Splash';

class App extends React.Component {
  render() {
    return (
      <div>
        {/*<Login/>*/}
        <Splash/>
        <Router>
          <Switch>
            <Route path={"/loginSuccess"} component={LoginSuccess}/>
            <Route path={"/hello"} component={() => <div>hello world</div>}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;