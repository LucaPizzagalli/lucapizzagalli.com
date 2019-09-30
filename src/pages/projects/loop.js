import React from "react";

import Layout from "../../components/layout";
import IndexPage from "../index";
import PortfolioPage from "../portfolio";
import AboutPage from "../about";

import Card from '@material-ui/core/Card';

const texts = [
  "Well, you are already seeing my website, but, here there is again.",
  "Mmm... Sure, same stuff.",
  "Yeah, it works, it just goes on.",
  "Yup, nothing new.",
  "...",
  "...",
  "Nice idea to invest in monitor with less bezels and then using it for this.",
  "Ok, so you like recursion.",
  "Then I'll not disappoint you:"
]

class LoopPage extends React.Component {
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
    this.state = { page: <IndexPage handler={this.handler} /> };
  }
  handler(link) {
    if (link === "/")
      this.setState({ page: <IndexPage handler={this.handler}/> });
    else if (link === "/portfolio")
      this.setState({ page: <PortfolioPage handler={this.handler}/> });
    else if (link === "/about")
      this.setState({ page: <AboutPage handler={this.handler}/> });
    else if (link === "/projects/loop")
      this.setState({ page: <LoopPage handler={this.handler} level={this.props.level+1}/> });
  }
  render() {
    return (
      <Layout handler={this.props.handler}>
        <h1>My website</h1>
        <p>{texts[this.props.level % 9]}</p>
        <Card>
          {this.state.page}
        </Card>
      </Layout>
    );
  }
}

LoopPage.defaultProps = {
  level: 0
}

export default LoopPage
