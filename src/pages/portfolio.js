import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
// import Image from "../components/image";

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

import opociiCover from "../images/opociiCover.png"
import microswimmersCover from "../images/microswimmersCover.png"
import chemotaxisCover from "../images/chemotaxisCover.png"
import memoryCardsCover from "../images/memoryCardsCover.png"
import ue4Cover from "../images/ue4Cover.png"
import loopCover from "../images/loopCover.png"

const previews = [
  {
    title: "Micro-swimmers simulation",
    link: "/static/microswimmersSlides/slides.html",
    staticLink: true,
    image: microswimmersCover,
    imageAlt: "comparison experiment simulation of a micro-swimmer in a confined quasi-2D environment",
    imageTitle: "comparison experiment simulation",
    excerpt: "For my thesis I developed a mathematical model describing the tumbling motion of a single cell organism in open and confined environment and its numerical implementation.",
    technologies: ["C++", "Python"],
    github: "https://github.com/LucaPizzagalli/motion-microswimmers-simulation"
  },
  {
    title: "Opocii's world",
    link: "/projects/opocii",
    image: opociiCover,
    imageAlt: "Contemplative Reptile",
    imageTitle: "stuff",
    excerpt: "Opocii are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    technologies: ["C"],
  },
  {
    title: "Chemotaxis simulation",
    link: "/projects/chemotaxis",
    image: chemotaxisCover,
    imageAlt: "Contemplative Reptile",
    imageTitle: "cosa",
    excerpt: "Opocii are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    technologies: ["C++"],
    github: "https://github.com/LucaPizzagalli/chemotaxis-pathfinding"
  },
  {
    title: "This same website",
    link: "/projects/loop",
    image: loopCover,
    imageAlt: "Contemplative Reptile",
    imageTitle: "cosa",
    excerpt: "Opocii are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    technologies: ["Html", "Javascript", "React"],
    github: "https://github.com/LucaPizzagalli/LucaPizzagalli.local"
  },
  {
    title: "Memory Cards",
    link: "/projects/memory",
    image: memoryCardsCover,
    imageAlt: "Contemplative Reptile",
    imageTitle: "cosa",
    excerpt: "Opocii are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    technologies: ["Python", "SQL"],
    github: "https://github.com/LucaPizzagalli/memory-cards"
  },
  {
    title: "Unreal Engine 4 prototype",
    link: "/projects/ue4",
    image: ue4Cover,
    imageAlt: "Contemplative Reptile",
    imageTitle: "cosa",
    excerpt: "Opocii are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    technologies: ["C++", "UE4"]
  },
]

class CardCore extends React.Component {
  render() {
    return (
      <>
        <CardMedia
          component="img"
          alt={this.props.preview.imageAlt}
          height="200"
          image={this.props.preview.image}
          title={this.props.preview.imageTitle}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" color="textPrimary" component="h2"> {this.props.preview.title} </Typography>
          <Typography variant="body2" color="textSecondary" component="p"> {this.props.preview.excerpt} </Typography>
        </CardContent>
      </>
    );
  }
}

class PortfolioPage extends React.Component {
  render() {
    return (
      <Layout handler={this.props.handler} selected="/portfolio">
        <SEO title="Portfolio" />
        <h1>My projects</h1>
        <p>Some of the projects for which I have a nice pic.</p>
        <Grid container spacing={3}>
          {previews.map(preview => (
            <Grid item sm={12} md={6}>
              <Card>
                {(() => {
                  if (preview.staticLink) {
                    return (
                      <CardActionArea href={preview.link}>
                        <CardCore preview={preview} />
                      </CardActionArea>);
                  }
                  else if (preview.link === "/projects/loop" && this.props.handler) {
                    return (
                      <CardActionArea onClick={() => this.props.handler(preview.link)}>
                        <CardCore preview={preview} />
                      </CardActionArea>);
                  }
                  else {
                    return (
                      <CardActionArea>
                        <Link to={preview.link} style={{ textDecoration: "none", }}>
                          <CardCore preview={preview} />
                        </Link>
                      </CardActionArea>);
                  }
                })()}
                <CardActions>
                  {preview.technologies.map(tech => (<Chip label={tech} color="primary" />))}
                  {(() => {
                    if (preview.github) {
                      return (<Tooltip title="View the source on Github" placement="top" style={{ marginLeft: 'auto', }}>
                        <IconButton href={preview.github}>
                          <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation" fill="grey" width="1em">
                            <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"></path>
                          </svg>
                        </IconButton>
                      </Tooltip>);
                    }
                  })()}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Layout>
    );
  }
}

export default PortfolioPage
