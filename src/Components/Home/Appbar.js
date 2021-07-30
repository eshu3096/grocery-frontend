import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Sidebar from '../Sidebar';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  shiftright: {
    display: 'flex',
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Appbar() {
  const classes = useStyles();
  const [showLeftBar, setShowLeftBar]=useState(false)
  const handleToggle=()=>{
    setShowLeftBar(!showLeftBar)
  }

  return (
    <>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon onClick={handleToggle}/>
          </IconButton>
          <Typography variant="h6" className={classes.title} color="inherit">
            Grocery
          </Typography>
          <Link to='/login'>
            <Button color="inherit" className={classes.btnstyle}>Login</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
    {
      showLeftBar && <div className={classes.shiftright}><Sidebar /></div>
    }
    </>
  );
}
