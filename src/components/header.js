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
    return (
      <AppBar color="primary" position="static">
        <Toolbar style={{ margin: `0 auto` }}>
          {navigation.map(element => (
            <>{(() => {
              if (this.props.handler && this.props.selected === element.link)
                return (
                  <MenuElement variant="h6" onClick={() => { this.props.handler(element.link); }} style={{ cursor: 'pointer', color: 'black' }}>
                    {element.title}
                  </MenuElement>)
              else if (this.props.handler)
                return (
                  <MenuElement variant="h6" onClick={() => { this.props.handler(element.link); }} style={{ cursor: 'pointer' }}>
                    {element.title}
                  </MenuElement>)
              else
                return (
                  <MenuElement variant="h6">
                    <Link to={element.link} activeStyle={{ color: `black` }}
                      style={{
                        color: `white`,
                        textDecoration: `none`
                      }}>{element.title}
                    </Link>
                  </MenuElement>)
            })()}</>
          ))}
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header
