import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button
} from '@material-ui/core';

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

const DogType = () => {
  const classes = useStyles();
  return (
    <div className={classes.welcome}>
    <div className={classes.container}>
      <div className={classes.title}>Tell us more about your dog!</div>
      <form>
        <TextField
          className={classes.input}
          label="Your Dog's Name"
          inputProps={{style: {fontSize: 40}}}
          InputLabelProps={{style: {fontSize: 40}}}/>
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
        onClick={() => changeView('dogtype')}>
        Submit
      </Button>
    </div>
      </div>
  )
}

export default DogType;