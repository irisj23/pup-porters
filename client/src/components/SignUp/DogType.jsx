import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
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
    fontSize: 80,
    fontWeight: 300,
    marginRight: 200,
    marginLeft: 200,
    marginBottom: 100,
  },
  form: {
    width: 500,
  },
  label: {
    fontSize: 30,
  },
  radio: {
    height: 100,
  },
  input: {
    width: 500,
    height: 150,
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

const DogType = (props) => {
  const classes = useStyles();
  const [view, setView] = useState(false);
  const [dogName, setDogName] = useState(null);
  const [dogSize, setDogSize] = useState('Small');

  const handleChange = (e) => {
    setDogSize(e.target.value);
  }

  if (!view) {
    return (
      <div className={classes.outer}>
        <div className={classes.container}>
          <Typography className={classes.title}>
            Tell us more about your dog!</Typography>
          <form>
            <TextField
              className={classes.input}
              label="Your Dog's Name"
              inputProps={{style: {fontSize: 40}}}
              InputLabelProps={{style: {fontSize: 40}}}
              onChange={(e) => setDogName(e.target.value)}/>
          </form>
          <FormControl className={classes.form}>
            <FormLabel className={classes.label}>Size of your dog</FormLabel>
              <RadioGroup
                value={dogSize} onChange={handleChange}>
                <FormControlLabel
                  label="Small (0-20lbs)"
                  control={<Radio color="primary"/>}
                  value="Small"
                  className={classes.radio}/>
                <FormControlLabel
                  label="Medium (21-50lbs)"
                  control={<Radio color="primary"/>}
                  value="Medium"
                  className={classes.radio}/>
                <FormControlLabel
                  label="Large (51-99lbs)"
                  control={<Radio color="primary"/>}
                  value="Large"
                  className={classes.radio}/>
                <FormControlLabel
                  label="Extra Large (100+lbs)"
                  control={<Radio color="primary"/>}
                  value="Extra Large"
                  className={classes.radio}/>
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