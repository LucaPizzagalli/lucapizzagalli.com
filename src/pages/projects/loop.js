import React from "react";

import Layout from "../../components/layout";
import IndexPage from "../index";
import PortfolioPage from "../portfolio";
import AboutPage from "../about";

import Card from '@material-ui/core/Card';

class Looppydoop extends React.Component {
  render() {
    return (
      <Layout level={this.props.level}>
        <h1>My website</h1>
        <p>Well, you are already seeing my website, but, here there is again.</p>
        <Card>
          {(() => {
            if (this.props.level + 1 < this.props.deepness)
              return (<Looppydoop page={this.props.page} level={this.props.level + 1} deepness={this.props.deepness} />);
            else if (this.props.page === "/")
              return (<IndexPage level={this.props.deepness} active="/" />);
            else if (this.props.page === "/portfolio")
              return (<PortfolioPage level={this.props.deepness} active="/portfolio" />);
            else if (this.props.page === "/about")
              return (<AboutPage level={this.props.deepness} active="/about" />);
            // else
            //   return (<IndexPage level="2" />);
          })()}
        </Card>
      </Layout>
    );
  }
}

const LoopPage = ({ location }) => {
  let page = "/";
  let level = 1;
  if (location.state) {
    page = location.state.page;
    level = location.state.level;
  }
  return (<Looppydoop page={page} level={0} deepness={level} />);
}

export default LoopPage
