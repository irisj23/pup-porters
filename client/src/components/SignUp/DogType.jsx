import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Slide
} from '@material-ui/core';

import CreditCardInfo from './CreditCardInfo.jsx';
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
    marginBottom: 100,
  },
  form: {
    width: 500,
  },
  input: {
    width: 500,
    height: 150,
  },
  text: {
    fontSize: 40,
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

const DogType = (props) => {
  const classes = useStyles();
  const [view, setView] = useState(false);
  const [dogName, setDogName] = useState(null);
  const [dogSize, setDogSize] = useState(null);

  if (!view) {
    return (
      <div className={classes.welcome}>
      <div className={classes.container}>
        <div className={classes.title}>Tell us more about your dog!</div>
        <form>
          <TextField
            className={classes.input}
            label="Your Dog's Name"
            inputProps={{style: {fontSize: 40}}}
            InputLabelProps={{style: {fontSize: 40}}}
            onChange={(e) => setDogName(e.target.value)}/>
        </form>
        <FormControl className={classes.form}>
          <FormLabel>Size of your dog</FormLabel>
          <RadioGroup className={classes.radio}>
            <FormControlLabel label="Small (0-20lbs)" control={<Radio />} value="Small" />
            <FormControlLabel label="Large (51-99lbs)" control={<Radio />} value="Large" />
            <FormControlLabel label="Extra Large (100+lbs)" control={<Radio />} value="Extra Large" />
          </RadioGroup>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => {
            setView('credit-card');
            props.setDogName(dogName);
            props.dogSize(dogSize);
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
  } else if (view === 'credit-card') {
    return (
      <Slide direction="up" in={true}>
        <div>
          <CreditCardInfo sendUserInfo={props.sendUserInfo}/>
        </div>
      </Slide>
    )
  } else if (view === 'back') {
    return (
      <Slide direction="down" in={true}>
        <div>
          <PersonalInfo/>
        </div>
      </Slide>
      )
  }

}

export default DogType;