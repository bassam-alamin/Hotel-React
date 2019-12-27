import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Cardy from './components/Cardy';
import Foods from './components/Foods';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Register from './components/Register';
import Order from './components/Order';

function App({match}) {

  return (
   
      <div className="App">
      <Router>
      <Switch>
            <Route path="/" exact  component={Cardy}></Route>
            <Route path="/foods/:food_category" exact component={Foods}></Route>
            <Route path="/register" exact component={Register}></Route>
            <Route path="/order" exact component={Order}></Route>


            </Switch>
      </Router>
      
      </div>
      
  );
}

export default App;
