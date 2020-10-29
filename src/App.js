import React from 'react';
import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Order from './components/Customer/Order/Order';
import { createContext } from 'react';
import { useState } from 'react';
import Login from './components/Login/Login';
import PrivateRouter from './components/PrivateRouter/PrivateRouter';
import Dashboard from './components/Customer/Dashboard/Dashboard';
import Review from './components/Customer/Review/Review';
import MakeAdmin from './components/Admin/AddAdmin/MakeAdmin';
import AllOrder from './components/Admin/AllOrder/AllOrder';
import AddService from './components/Admin/AddServices/AddService';
import NotFound from './components/NotFound/NotFound';

export const userContext = createContext();
export const idContext = createContext();

function App() {
  const [user,setUser] = useState({
    name: '',
    email: '',
    userExist: '',
    error: ''
  })
  const [serviceId,setServiceId]= useState('');
  return (
    <userContext.Provider value={[user,setUser]}>
      <idContext.Provider value={[serviceId,setServiceId]}>
        <Router>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRouter path="/servicelist">
              <Dashboard></Dashboard>
            </PrivateRouter>
            <PrivateRouter path="/order">
              <Order></Order>
            </PrivateRouter>
            <PrivateRouter path="/review">
              <Review></Review>
            </PrivateRouter>
            <PrivateRouter path="/makeadmin">
              <MakeAdmin></MakeAdmin>
            </PrivateRouter>
            <PrivateRouter path="/allorder">
              <AllOrder></AllOrder>
            </PrivateRouter>
            <PrivateRouter path="/addservice">
              <AddService></AddService>
            </PrivateRouter>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </idContext.Provider>
    </userContext.Provider>
  );
}

export default App;
