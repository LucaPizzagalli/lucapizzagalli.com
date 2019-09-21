import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
// core components
import headerStyle from "assets/jss/material-kit-react/components/headerStyle.jsx";

class Header extends React.Component {
  render() {
    const {
      classes,
      color,
      rightLinks,
      leftLinks,
      brand,
      absolute
    } = this.props;
    const appBarClasses = classNames({
      [classes.appBar]: true,
      [classes[color]]: color,
      [classes.absolute]: absolute
    });
    const brandComponent = <Button className={classes.title}>{brand}</Button>;
    return (
      <AppBar className={appBarClasses}>
        <Toolbar className={classes.container}>
          {leftLinks !== undefined ? brandComponent : null}
          <div className={classes.flex}>
            {leftLinks !== undefined ? (
              <Hidden smDown implementation="css">
                {leftLinks}
              </Hidden>
            ) : (
                brandComponent
              )}
          </div>
            {rightLinks}
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(headerStyle)(Header);
