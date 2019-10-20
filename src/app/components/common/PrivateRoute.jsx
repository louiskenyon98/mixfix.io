import React from 'react';
import Cookie from 'js-cookie';
import {Route, Redirect} from 'react-router-dom';

export const PrivateRoute = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={(props) =>(
      Cookie.get('isLoggedIn') === 'true' ? <Component{...props}/> : <Redirect to={'/login'}/>
    )}/>
  )
};