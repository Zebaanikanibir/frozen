import React, { createContext } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import Cart from './Components/Cart/Cart';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import { useState } from 'react';
import ConfirmCart from './Components/ConfirmCart/ConfirmCart';
import BookingList from './Components/Home/Home/BookingList/BookingList';
import AddCollection from './Components/Home/AddCollection/AddCollection';
import Dashboard from './Components/Dashboard/Dashboard';
import AddReview from './Components/Home/AddReview/AddReview';
import AddAdmin from './Components/Home/Home/AddAdmin/AddAdmin';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]} className="App">
      
     <Router>
    
        <Switch>
          
          <Route path="/home">
            <Home />
          </Route>
          
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute  path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route  path="/addReview">
            <AddReview />
          </Route>
          <PrivateRoute path="/addCollection">
           <AddCollection></AddCollection>
          </PrivateRoute>
          <PrivateRoute path="/cart/:id">
            <Cart></Cart>
          </PrivateRoute>
        </Switch>
        <Route  path="/login">
            <Login />
          </Route>
          <Route  path="/addAdmin">
            <AddAdmin />
          </Route>
          <PrivateRoute  path="/confirmCart">
            <ConfirmCart />
          </PrivateRoute>
          <PrivateRoute  path="/bookingList">
            <BookingList />
          </PrivateRoute>
           
    </Router>
    </UserContext.Provider>
  );
}

export default App;
