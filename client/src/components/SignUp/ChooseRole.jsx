import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Slide } from '@material-ui/core';

import PersonalInfo from './PersonalInfo.jsx';
import Welcome from './Welcome.jsx';

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
    marginRight: 200,
    marginLeft: 200,
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

const ChooseRole = (props) => {
  const classes = useStyles();
  const [view, setView] = useState(false);

  if (!view) {
    return (
      <div className={classes.welcome}>
        <div className={classes.container}>
          <div className={classes.title}>
            Are you a caregiver or a remover?</div>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => {
              setView('caregiver');
              props.setRole('caregiver');
            }}>
            Caregiver
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => {
              setView('remover');
              props.setRole('remover');
            }}>
            Remover
          </Button>
          <Button
            variant="contained"
            className={classes.button}
            onClick={() => setView('welcome')}>
            Back
          </Button>
        </div>
      </div>
    )
  } else if (view === 'caregiver' || view === 'remover') {
    return (
      <Slide direction="up" in={true}>
        <div>
          <PersonalInfo
            setEmail={props.setEmail}
            setPassword={props.setPassword}
            setDogName={props.setDogName}
            setDogSize={props.setDogSize}
            sendUserInfo={props.sendUserInfo}/>
        </div>
      </Slide>
    )
  } else if (view === 'welcome') {
    return (
      <Slide direction="down" in={true}>
        <div>
          <Welcome/>
        </div>
      </Slide>)
  }
}

export default ChooseRole;