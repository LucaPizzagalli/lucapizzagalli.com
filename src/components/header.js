import { Link } from "gatsby";
import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginRight: theme.spacing(4),
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <AppBar color="primary" position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation" width="1.2em"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          <Link to="/" activeStyle={{ color: `black` }}
            style={{
              color: `white`,
              textDecoration: `none`,
            }}>Home</Link>
        </Typography>
        <Typography variant="h6" className={classes.title}>
          <Link to="/portfolio/" activeStyle={{ color: `black`}}
            style={{
              color: `white`,
              textDecoration: `none`,
            }}>Portfolio</Link>
        </Typography>
        <Typography variant="h6" className={classes.title}>
          <Link to="/about/" activeStyle={{ color: `black` }}
            style={{
              color: `white`,
              textDecoration: `none`,
            }}>About</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
