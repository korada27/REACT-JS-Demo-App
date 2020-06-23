import React from 'react';
import './App.css';
import Login from '../Auth/Login/Login'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import About from '../About/About';
import News from '../News/News';
import Auth from '../Auth/Auth';
import Contact from '../Contact/Contact';


function App() {


  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={ props => Auth.getAuth() 
      ? (<Component {...props} /> ) 
      : (<Redirect to={ { pathname: "/" } }
    />
    )
    }
    />
    );


  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <Route path="/dashboard/about" component={About} />
          <Route path="/dashboard/news" component={News} />
          <Route path="/dashboard/contact" component={Contact} />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
