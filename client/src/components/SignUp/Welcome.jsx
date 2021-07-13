import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import ChooseRole from './ChooseRole.jsx';
import Login from './Login.jsx';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  welcome: {
    position: 'relative',
    top: 300,
  },
  title: {
    fontSize: 90,
    marginBottom: 250,
  },
  button: {
    height: 75,
    width: 500,
    borderRadius: 40,
    boxShadow: '0 5px 10px 5px rgba(128,128,128, .3)',
    fontSize: 30,
    margin: 50,
  }
});

const Welcome = () => {
  const classes = useStyles();
  const [view, changeView] = useState('welcome');

  if (view === 'welcome' ) {
    return (
      <div className={classes.welcome}>
        <div className={classes.container}>
          <div className={classes.title}>{'Welcome'}</div>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => changeView('login')}>
            Log in
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => changeView('signup')}>
            Sign up
          </Button>
        </div>
      </div>
    )
  } else if (view === 'signup') {
    return (<ChooseRole />)
  } else if (view === 'login') {
    return (<Login/>)
  }
}

export default Welcome