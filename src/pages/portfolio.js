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

const previews = [

  {
    title: "Opocii world",
    link: "/projects/opocii",
    image: opociiCover,
    imageAlt: "Contemplative Reptile",
    imageTitle: "cosa",
    excerpt: "Opocii are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    technologies: ["C"],
  },
  {
    title: "Unreal Engine 4 prototype",
    link: "/projects/ue4",
    image: opociiCover,
    imageAlt: "Contemplative Reptile",
    imageTitle: "cosa",
    excerpt: "Opocii are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    technologies: ["C++"]
  },
  {
    title: "Micro-swimmers simulation",
    link: "/static/microswimmersSlides/slides.html",
    image: microswimmersCover,
    imageAlt: "comparison experiment simulation",
    imageTitle: "comparison experiment simulation",
    excerpt: "Opocii are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    technologies: ["C++", "Python"],
    github: "https://github.com/LucaPizzagalli/motion-microswimmers-simulation"
  },
  {
    title: "This same website",
    image: opociiCover,
    imageAlt: "Contemplative Reptile",
    imageTitle: "cosa",
    excerpt: "Opocii are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    technologies: ["Html", "Javascript", "React"],
    github: "https://github.com/LucaPizzagalli/LucaPizzagalli.local"
  },
  {
    title: "Chemotaxis simulation",
    image: chemotaxisCover,
    imageAlt: "Contemplative Reptile",
    imageTitle: "cosa",
    excerpt: "Opocii are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    technologies: ["C++"],
    github: "https://github.com/LucaPizzagalli/chemotaxis-pathfinding"
  },
  {
    title: "Memory Cards",
    image: memoryCardsCover,
    imageAlt: "Contemplative Reptile",
    imageTitle: "cosa",
    excerpt: "Opocii are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    technologies: ["Python", "SQL"],
    github: "https://github.com/LucaPizzagalli/memory-cards"
  },
]

const Portfolio = () => (
  <Layout>
    <SEO title="Portfolio" />
    <h1>My projects</h1>

    <Grid container spacing={3}>
      {previews.map(preview => (
        <Grid item sm={12} md={6}>
          <Card>{/* className={classes.card}>*/}
            <CardActionArea>
              <Link to={preview.link} style={{ textDecoration: `none`, }}>
                <CardMedia
                  component="img"
                  alt={preview.imageAlt}
                  height="200"
                  image={preview.image}
                  title="Opocii"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" color="textPrimary" component="h2"> {preview.title} </Typography>
                  <Typography variant="body2" color="textSecondary" component="p"> {preview.excerpt} </Typography>
                </CardContent>
              </Link>
            </CardActionArea>
            <CardActions>
              {preview.technologies.map(tech => (<Chip label={tech} clickable color="primary" />))}
              {(() => {
                if (preview.github)
                {
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
)

export default Portfolio
