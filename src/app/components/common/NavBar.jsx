import React from 'react';
import {withStyles, AppBar, Toolbar, Button, IconButton, Typography} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu'
import {Link} from "react-router-dom";
import {theme} from "../../theme";

const styles = {
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
};

const NavBar = (props) => {
  return (
    <div className={props.classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={props.classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={props.classes.title}>
            News
          </Typography>
          <Button component={Link} to="/login" color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
};

export default withStyles(styles)(NavBar);