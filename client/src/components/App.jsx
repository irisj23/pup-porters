import React from 'react';
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UserProfile from './Profile_UpdatePayment/userProfile.jsx';


const App = (props) => {
  return (
    <Router>
      <Switch>
      <div>
      <div>Hello World!</div>
      <Route path="/profile">
      <UserProfile/>

      </Route>

    </div>

      </Switch>


    </Router>

  )
}

export default App;