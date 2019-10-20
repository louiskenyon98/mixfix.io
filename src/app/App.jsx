import React from 'react';
import {ThemeProvider} from '@material-ui/styles';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import SpotifyLoginSuccess from './components/SpotifyLogin/SpotifyLoginSuccess';
import Splash from './components/Splash/Splash';
import {theme} from './theme';
import SignupFormContainer from './containers/SignupFormContainer';
import {PrivateRoute} from './components/common/PrivateRoute';
import LoginFormContainer from './containers/LoginFormContainer';

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path={"/"} component={Splash}/>
            <Route exact path={"/login"} component={LoginFormContainer}/>
            <Route path={"/loginSuccess"} component={SpotifyLoginSuccess}/>
            <PrivateRoute path={"/hello"} component={() => <div>This is a private hello world page</div>}/>
            <Route path={"/signup"} component={SignupFormContainer}/>
          </Switch>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;