import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Home from './home/components/home';
import Login from './login/components/login';
import ProductDetail from './productDetail/components/productDetail';
import Register from './register/components/register';

import './App.css';

function App() {
  return (
    <div className="App">

      <div className="routeContainer">
        <Switch>
          <Route exact path="/" render={() => (<Redirect to="/home" />)} />
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/productDetail" component={ProductDetail} />
          <Route path="/register" component={Register} />
          <Redirect to="/" />
        </Switch>


      </div>

    </div>
  );
}

export default App;
