import React from "react";

import Layout from "../../components/layout";
import IndexPage from "../index";
import PortfolioPage from "../portfolio";
import AboutPage from "../about";

import Card from '@material-ui/core/Card';

class Looppydoop extends React.Component {
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
      this.setState({ page: <Looppydoop handler={this.handler}/> });
  }
  render() {
    return (
      <Layout handler={this.props.handler}>
        <h1>My website</h1>
        <p>Well, you are already seeing my website, but, here there is again.</p>
        <Card>
          {this.state.page}
        </Card>
      </Layout>
    );
  }
}

const LoopPage = () => {
  return (
    <Looppydoop />
  );
}

export default LoopPage
