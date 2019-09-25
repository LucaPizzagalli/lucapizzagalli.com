import { Link } from "gatsby";
import React from "react";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { styled } from '@material-ui/styles';

const navigation = [
  {
    title: "Home",
    link: "/"
  },
  {
    title: "Portfolio",
    link: "/portfolio"
  },
  {
    title: "About",
    link: "/about"
  }
];

const MenuElement = styled(Typography)({
  marginRight: "0.5rem",
  marginLeft: "0.5rem",
});

class Header extends React.Component {
  render() {
    if (this.props.level) {
      return (
        <AppBar color="primary" position="static">
          <Toolbar style={{ margin: `0 auto` }}>
            {navigation.map(element => (
              <MenuElement variant="h6">
                {(() => {
                  if (this.props.active === element.link) {
                    return (
                      <Link to="/projects/loop" state={{ level: this.props.level, page: element.link }}
                        style={{
                          color: `black`,
                          textDecoration: `none`,
                        }}>{element.title}
                      </Link>);
                  }
                  else {
                    return (
                      <Link to="/projects/loop" state={{ level: this.props.level, page: element.link }}
                        style={{
                          color: `white`,
                          textDecoration: `none`,
                        }}>{element.title}
                      </Link>);
                  }
                })()}
              </MenuElement>
            ))}
          </Toolbar>
        </AppBar>
      );
    }
    else
      return (
        <AppBar color="primary" position="static">
          <Toolbar style={{ margin: `0 auto` }}>
            {navigation.map(element => (
              <MenuElement variant="h6">
                <Link to={element.link} activeStyle={{ color: `black` }}
                  style={{
                    color: `white`,
                    textDecoration: `none`
                  }}>{element.title}
                </Link>
              </MenuElement>
            ))}
          </Toolbar>
        </AppBar>
      );
  }
}

export default Header
