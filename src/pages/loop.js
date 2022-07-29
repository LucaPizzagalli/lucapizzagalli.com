import React from "react";

import Layout from "../components/layout";
import IndexPage from "./index";
import ProjectsPage from "./side-projects";
import AboutPage from "./about";
import BlogPage from "./blog";

let texts = [
  "Well, you are already seeing my website, but, here it is again.",
  "Mmm... Sure, same stuff.",
  "Yeah, it works, it just goes on.",
  "Yup, nothing new.",
  "...",
  "...",
  "Hey... still here, I see.",
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
    else if (link === "/side-projects")
      this.setState({ page: <ProjectsPage handler={this.handler}/> });
      else if (link === "/about")
        this.setState({ page: <AboutPage handler={this.handler}/> });
        else if (link === "/blog")
          this.setState({ page: <BlogPage handler={this.handler}/> });
    else if (link === "/loop")
      this.setState({ page: <LoopPage handler={this.handler} level={this.props.level+1}/> });
  }
  render() {
    return (
      <Layout handler={this.props.handler}>
        <h1>My website</h1>
        <p>{texts[this.props.level % 9]}</p>
        <div>
          {this.state.page}
        </div>
      </Layout>
    );
  }
}

LoopPage.defaultProps = {
  level: 0
}

export default LoopPage
