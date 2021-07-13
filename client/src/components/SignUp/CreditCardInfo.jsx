import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, Button } from '@material-ui/core';

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
    fontWeight: 300,
    marginRight: 200,
    marginLeft: 200,
    marginBottom: 250,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    width: 500,
    height: 150,
  },
  text: {
    fontSize: 40,
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

const CreditCardInfo = (props) => {
  const classes = useStyles();
  const [view, setView] = useState(false);
  return (
    <div className={classes.outer}>
      <div className={classes.container}>
        <Typography className={classes.title}>
            You're almost there!
        </Typography>
        <form  className={classes.form} required autoComplete="off">
          <TextField
            className={classes.input}
            label="Email Address"
            inputProps={{style: {fontSize: 40}}}
            InputLabelProps={{style: {fontSize: 40}}}
            onChange={(e) => setEmail(e.target.value)}/>
          <TextField
            className={classes.input}
            label="Password"
            inputProps={{style: {fontSize: 40}}}
            InputLabelProps={{style: {fontSize: 40}}}
            onChange={(e) => setPassword(e.target.value)}/>
        </form>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => {
            props.sendUserInfo();
          }}>
          Submit
        </Button>
        <Button
          variant="contained"
          className={classes.button}
          onClick={() => setView('back')}>
          Back
        </Button>
      </div>
    </div>
  )
}

export default CreditCardInfo;