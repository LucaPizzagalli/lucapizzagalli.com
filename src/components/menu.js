import { Link } from "gatsby";
import React from "react";

let navigation = [
  {
    title: "Home",
    url: "/"
  },
  {
    title: "Side Projects",
    url: "/side-projects"
  },
  {
    title: "Blog",
    url: "/blog"
  },
  {
    title: "About",
    url: "/about"
  }
];

function Menu({ handler, selected }) {
  return (
    <menu>
      {navigation.map(element => (
        <li key={element.url}>
          {handler ?
            <div onClick={() => { handler(element.url);}} style={{ cursor: 'pointer' }}>
              {element.title}
            </div>
            : selected !== element.url ?
              <Link style={{ color: "#fafafa" }} to={element.url}>
                {element.title}
              </Link>
              :
              element.title
          }
        </li>
        // <li variant="h6" onClick={() => { this.props.handler(element.url); }} style={{ cursor: 'pointer', color: 'black' }}>
      ))}
    </menu>
  );
}

export default Menu
