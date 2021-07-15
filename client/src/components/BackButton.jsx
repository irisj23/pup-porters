import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

export default function BackButton() {
  const history = useHistory()

  return (
    <React.Fragment>
       <Button
      onClick={() => history.go(-1)}
      variant="contained"
    >
      Back
    </Button>

    </React.Fragment>

  )
}