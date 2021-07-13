import React from 'react';
import TextField from '@material-ui/core/Button';

const CreditCardInfo = () => {
  return (
    <div>
      <h3>You're almost there!</h3>
      <form className={classes.root} required autoComplete="off">
        <TextField label="Email Address" />
        <TextField label="Password" />
      </form>
      back
    </div>
  )
}

export default PersonalInfo;