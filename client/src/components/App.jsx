import React from 'react';
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UserProfile from './Profile_UpdatePayment/userProfile.jsx';
import Welcome from './signup/Welcome.jsx';


const App = (props) => {
  return (
    <Router>
      <Switch>
      <div>
      <div>Hello World!</div>
<<<<<<< HEAD
      <Route path="/profile">
      <UserProfile/>

      </Route>

=======
      {/* <UserProfile/> */}
      <Welcome/>
>>>>>>> d844a8feb670e5385b5516853742cabbd55c591f
    </div>

      </Switch>


    </Router>

  )
}

export default App;