import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import PersonalInfo from './PersonalInfo.jsx';

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

const ChooseRole = () => {
  const classes = useStyles();
  const [role, chooseRole] = useState(false);

  if (!role) {
    return (
      <div className={classes.welcome}>
        <div className={classes.container}>
          <div className={classes.title}>Are you a caregiver or a remover?</div>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => chooseRole('caregiver')}>
            Caregiver
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => chooseRole('remover')}>
            Remover
          </Button>
          <Button
            variant="contained"
            className={classes.button}>
            Back
          </Button>
        </div>
      </div>
    )
  } else if (role === 'caregiver' || role === 'remover') {
    return (<PersonalInfo/>)
  }
}

export default ChooseRole;