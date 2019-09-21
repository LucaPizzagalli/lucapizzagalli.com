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
import Typography from '@material-ui/core/Typography';

import opociiCover from "../images/opociiCover.png"


const previews = [

  {
    title: "Opocii Simulation",
    imageDir: "/projects/opociiSimulation",
    imageAlt: "Contemplative Reptile",
    imageTitle: "cosa",
    excerpt: "Opocii are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    technologies: ["C"]
  },
  {
    title: "Unreal Engine Prototype",
    imageDir: "/projects/opociiSimulation",
    imageAlt: "Contemplative Reptile",
    imageTitle: "cosa",
    excerpt: "Opocii are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    technologies: ["C++"]
  },
  {
    title: "Micro-swimmers simulation",
    imageDir: "/projects/opociiSimulation",
    imageAlt: "Contemplative Reptile",
    imageTitle: "cosa",
    excerpt: "Opocii are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    technologies: ["C++"]
  },
  {
    title: "This same website",
    imageDir: "/projects/opociiSimulation",
    imageAlt: "Contemplative Reptile",
    imageTitle: "cosa",
    excerpt: "Opocii are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    technologies: ["Html", "Javascript", "primary"]
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
              <Link to="/projects/opociiSimulation" style={{ textDecoration: `none`, }}>
                <CardMedia
                  component="img"
                  alt={preview.imageAlt}
                  height="200"
                  image={opociiCover}
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
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Layout>
)

export default Portfolio
