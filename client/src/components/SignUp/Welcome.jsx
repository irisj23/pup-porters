import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Slide } from '@material-ui/core';

import ChooseRole from './ChooseRole.jsx';
import Login from './Login.jsx';

const useStyles = makeStyles({
  outer: {
    position: 'relative',
    top: 300,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: 90,
    fontWeight: 100,
    marginBottom: 300,
  },
  button: {
    height: 100,
    width: 500,
    borderRadius: 40,
    boxShadow: '0 5px 10px 5px rgba(128,128,128, .3)',
    fontSize: 30,
    margin: 50,
  }
});

const Welcome = () => {
  const classes = useStyles();
  const [view, setView] = useState(false);
  const [role, setRole] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [dogName, setDogName] = useState(null);
  const [dogSize, setDogSize] = useState(null);

  const sendUserInfo = () => {
    const data = {
      role: role,
      email: email,
      password: password,
      dogName: dogName,
      dogSize: dogSize };
    console.log(data);
  }

  if (!view) {
    return (
      <div className={classes.outer}>
        <div className={classes.container}>
          <Typography className={classes.title}>Welcome!</Typography>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => setView('login')}>
            Log in
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => setView('signup')}>
            Sign up
          </Button>
        </div>
      </div>
    )
  } else if (view === 'signup') {
    return (
      <Slide direction="up" in={true}>
        <div>
          <ChooseRole
          setRole={setRole}
          setEmail={setEmail}
          setPassword={setPassword}
          setDogName={setDogName}
          setDogSize={setDogSize}
          sendUserInfo={sendUserInfo}
          />
        </div>
      </Slide>
    )
  } else if (view === 'login') {
    return (
      <Slide direction="up" in={true}>
        <div>
          <Login/>
        </div>
      </Slide>)
  }
};

export default Welcome;