import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Badge from "components/Badge/Badge.jsx";

import basicsStyle from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.jsx";

class SectionBasics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [24, 22],
      selectedEnabled: "b",
      checkedA: true,
      checkedB: false
    };
    this.handleChangeEnabled = this.handleChangeEnabled.bind(this);
  }
  componentDidMount() {
  }
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  handleChangeEnabled(event) {
    this.setState({ selectedEnabled: event.target.value });
  }
  handleToggle(value) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.sections}>
        <div className={classes.container}>
          <div className={classes.title}>
            <h2>Basic Elements</h2>
          </div>
          <div id="buttons">
            <div className={classes.title}>
              <h3>
                Buttons
                <br />
                <small>Pick your style</small>
              </h3>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8}>
                <Button color="primary">Default</Button>
                <Button color="primary" round>
                  round
                </Button>
                <Button color="primary" round>
                  <Favorite className={classes.icons} /> with icon
                </Button>
                <Button justIcon round color="primary">
                  <Favorite className={classes.icons} />
                </Button>
                <Button color="primary" simple>
                  simple
                </Button>
              </GridItem>
            </GridContainer>
            <div className={classes.title}>
              <h3>
                <small>Pick your size</small>
              </h3>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8}>
                <Button color="primary" size="sm">
                  Small
                </Button>
                <Button color="primary">Regular</Button>
                <Button color="primary" size="lg">
                  Large
                </Button>
              </GridItem>
            </GridContainer>
            <div className={classes.title}>
              <h3>
                <small>Pick your color</small>
              </h3>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8}>
                <Button>Default</Button>
                <Button color="primary">Primary</Button>
                <Button color="info">Info</Button>
                <Button color="success">Success</Button>
                <Button color="warning">Warning</Button>
                <Button color="danger">Danger</Button>
                <Button color="rose">Rose</Button>
              </GridItem>
            </GridContainer>
          </div>
          <div className={classes.space70} />
          <div id="sliders">
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.title}>
                  <h3>Badges</h3>
                </div>
                <Badge>default</Badge>
                <Badge color="primary">primary</Badge>
                <Badge color="info">info</Badge>
                <Badge color="success">success</Badge>
                <Badge color="warning">warning</Badge>
                <Badge color="danger">danger</Badge>
                <Badge color="rose">rose</Badge>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(basicsStyle)(SectionBasics);
