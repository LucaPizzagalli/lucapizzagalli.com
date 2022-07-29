import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout";
import Chip from "../components/chip";
import Seo from "../components/seo";
// import Image from "../components/image";


let cards_data = [
  {
    title: "Micro-swimmers simulation",
    url: "/static/microswimmersSlides/slides.html",
    staticLink: true,
    image: <StaticImage src="../images/microswimmersCover.png" alt="comparison experiment simulation of a micro-swimmer in a confined quasi-2D environment" />,
    excerpt: "Mathematical model describing the tumbling motion of a single cell organism in open and confined environment and its numerical implementation.",
    technologies: ["C++", "Python"],
    github: "https://github.com/LucaPizzagalli/motion-microswimmers-simulation"
  },
  {
    title: "Opocii's world",
    url: "/projects/opocii",
    staticLink: false,
    image: <StaticImage src="../images/opociiCover.png" alt="A couple of opocii's swarms face each other on a map" />,
    excerpt: "3D simulation/game of a population of creatures that grow, eat, build, kill, die. Made using only a 2D rendering library.",
    technologies: ["C"],
  },
  {
    title: "Chemotaxis simulation",
    url: "https://github.com/LucaPizzagalli/chemotaxis-pathfinding",//"/projects/chemotaxis",
    staticLink: true,
    image: <StaticImage src="../images/chemotaxisCover.png" alt="Simulation of bacteria forming clusters" />,
    excerpt: "Imitating bacteria beheviour, a swarm of agents is able to transport mass from a source to a sink. Each agent can find its way across obstacles using chemotaxis and exchanging a bit of information with other agents it meets along its path.",
    technologies: ["C++"],
    github: "https://github.com/LucaPizzagalli/chemotaxis-pathfinding"
  },
  {
    title: "This same website",
    url: "/loop",
    staticLink: false,
    image: <StaticImage src="../images/loopCover.png" alt="This same website" />,
    excerpt: "Website built with Gatsby, a static site generator for React. Over-killing for this simple portfolio, but a nice learning experience.",
    technologies: ["Html", "Javascript", "React"],
    github: "https://github.com/LucaPizzagalli/LucaPizzagalli.local"
  },
  {
    title: "Memory Cards",
    url: "https://github.com/LucaPizzagalli/memory-cards", //"/projects/memory",
    staticLink: true,
    image: <StaticImage src="../images/memoryCardsCover.png" alt="GUI of the Memory Cards software" />,
    excerpt: "Software that allows the user to create flashcards and run study sessions. It interfaces with the text editor/ pdf reader / browser/ etc. for showing the cards and the answers. It keeps track of the progress.",
    technologies: ["Python", "SQL"],
    github: "https://github.com/LucaPizzagalli/memory-cards"
  },
  {
    title: "Unreal Engine 4 prototype",
    url: "/projects/ue4",
    staticLink: false,
    image: <StaticImage src="../images/ue4Cover.png" alt="No image available" />,
    excerpt: "Prototype of a 3D editor for building skeletons of a wide variety of shapes, comprehensive of joins and bones. The creatures are later programmable writing the sequences of movements to perform.",
    technologies: ["C++", "UE4"]
  },
]

function ProjectCard({ handler, data }) {
  return (
    <div key={data.title} className="card">
      {data.url === "/loop" && handler ?
        <div onClick={() => handler(data.url)}>
          {data.image}
          <h4 className="card-title"> {data.title} </h4>
        </div>
        :
        data.staticLink ?
          <a href={data.url}>
            {data.image}
            <h4 className="card-title"> {data.title} </h4>
          </a>
          :
          <Link to={data.url}>
            {data.image}
            <h4 className="card-title"> {data.title} </h4>
          </Link>
      }
      <p >{data.excerpt}</p>
      <div style={{display: "flex"}}>
        {data.technologies.map(tech => (<Chip key={tech} label={tech} color="primary" />))}
        {data.github &&
          <Chip key="github" label="GitHub" href={data.github} />
        }
      </div>
    </div>
  );
}

function ProjectsPage({ handler }) {
  return (
    <Layout handler={handler} selected="/portfolio">
      <Seo title="Portfolio" description="" lang="en" meta={[]} />
      <h1>My projects</h1>
      <p>Some of the projects for which I have a nice pic.</p>
      <div className="grid">
        {cards_data.map(data => (
          <div key={data.title} className="grid-item">
            <ProjectCard handler={handler} data={data} />
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default ProjectsPage
