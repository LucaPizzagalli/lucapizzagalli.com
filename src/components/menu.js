import { Link } from "gatsby";
import React, { useState } from 'react';

let navigation = [
  {
    title: "Home",
    url: "/",
    folder: "",
  },
  {
    title: "Things",
    url: "/things",
    folder: "things",
  },
  {
    title: "Words",
    url: "/words",
    folder: "words",
  },
  {
    title: "About",
    url: "/about",
    folder: "about",
  }
];

function Menu({ location, loop = false, foldable = false }) {
  let [isHidden, setIsHidden] = useState(true);

  let folder = location.split('/')[1];


  if (loop && loop.level === 36)
    return (
      <menu>{navigation.map(element => (
        <li key={element.url}>
          <Link to="/the-void">
            {element.title}
          </Link>
        </li>
      ))}</menu>
    );

  if (loop && loop.level > 0)
    return (
      <menu>{navigation.map(element => (
        <li key={element.url}>
          <a href={() => false} onClick={() => { loop.setUrl(element.url); }}
            style={element.folder === folder ?
              { cursor: 'pointer', color: "var(--highlight-color)" }
              :
              { cursor: 'pointer' }}
          >
            {element.title}
          </a>
        </li>
      ))}</menu>
    );

  if (!foldable)
    return (
      <menu>{navigation.map(element => (
        <li key={element.url}>
          <Link to={element.url}
            style={element.folder === folder ? { color: "var(--highlight-color)" } : {}}
          >
            {element.title}
          </Link>
        </li>
      ))}</menu>
    );

  if (isHidden)
    return (
      <menu style={{ minWidth: "20px" }}>
        <button class="menu" onClick={() => { setIsHidden(false) }}>
          <span hidden>menu</span>
        </button>
      </menu>
    );

  return (
    <menu>{navigation.map(element => (
      <li key={element.url}>
        <Link to={element.url}
          style={element.folder === folder ? { color: "var(--highlight-color)" } : {}}
        >
          {element.title}
        </Link>
      </li>
    ))}</menu>
  );
}

export default Menu
