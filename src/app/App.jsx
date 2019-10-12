import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SpotifyLoginSuccess from './components/SpotifyLogin/SpotifyLoginSuccess';
import Splash from './components/Splash/Splash';

class App extends React.Component {
  render() {
    return (
      <div>
        {/*<Login/>*/}
        <Splash/>
        <Router>
          <Switch>
            <Route path={"/loginSuccess"} component={SpotifyLoginSuccess}/>
            <Route path={"/hello"} component={() => <div>hello world</div>}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;