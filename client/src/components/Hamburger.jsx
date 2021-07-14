import React, { useState } from 'react';
import clsx from 'clsx';

import MenuIcon from '@material-ui/icons/Menu';
import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  list: {
    color: 'FFFFFF',
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  paper: {
    background: "#2565A0"
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  }
}));



export default function Hamburger() {
  const classes = useStyles();
  const [state, setState] = useState(false)

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState(open);
  };

  const list = () => {
    <div
    className={clsx(classes.list, {
      [classes.fullList]: 'top' || 'bottom',
    })}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >

      <List>
        {['User Profile', 'Pup Pile Map', 'Drop Off'].map((text, index) => (
          <ListItem button key={text}>

            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  };

  return (
    <React.Fragment>
      <IconButton onClick={toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        classes={{ paper: classes.paper }}
        open={state}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list()}
      </SwipeableDrawer>

    </React.Fragment>





  )
}

