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
import { AuthProvider } from '../contexts/AuthContext'

const App = (props) => {
  return (
    // <AuthProvider>
      <div>
      <div>Hello World!</div>

      <Welcome/>
    </div>
    // </AuthProvider>
  )
}

export default App;