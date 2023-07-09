import { Link } from "gatsby";
import React, { useState } from 'react';

import "../assets/style/menu.css";

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

function Menu({ location, loop = false, foldable = false, menuTheme="" }) {
  let [isHidden, setIsHidden] = useState(foldable);

  let folder = location.split('/')[1];


  if (loop && loop.level === 36)
    return (
      <div className="website-menu">
        <menu>
          {navigation.map(element => (
            <li key={element.url}>
              <Link to="/the-void">
                {element.title}
              </Link>
            </li>
          ))}
        </menu>
      </div>
    );

  if (loop && loop.level > 0)
    return (
      <div className="website-menu">
        <menu>
          {navigation.map(element => (
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
          ))}
        </menu>
      </div>
    );

  if (foldable)
    return (
      <div key={isHidden}
        className={menuTheme + ' website-menu-wrapper ' + (isHidden ? 'reverse' : '')} >
        <div className="website-menu sliding-text-wrapper">
          <menu className="sliding-text">
            {navigation.map(element => (
              <li key={element.url}>
                <Link to={element.url}
                  style={element.folder === folder ? { color: "inherit" } : {}}
                >
                  {element.title}
                </Link>
              </li>
            ))}
          </menu>
        </div>
        <button className="menu-circle"
            onClick={() => setIsHidden(false)}>
          <div className="menu-half-circle-wrapper"
            style={{ clipPath: "inset(0 50% 0 0)" }}>
            <div className="menu-half-circle left-animated"
              style={{ animationName: "animation-circle-left" }} />
          </div>
          <div className="menu-half-circle-wrapper"
            style={{ clipPath: "inset(0 0 0 50%)" }}>
            <div className="menu-half-circle right-animated"
              style={{ animationName: "animation-circle-right" }} />
          </div>
        </button>
        <button className="menu-line" onClick={() => setIsHidden(true)}>
          <div className="menu-inner-line" />
          <span hidden>Close Menu</span>
        </button>
      </div>
    );

  return (
    <div className="website-menu">
      <menu>
        {navigation.map(element => (
          <li key={element.url}>
            <Link to={element.url}
              style={element.folder === folder ? { color: "var(--highlight-color)" } : {}}
            >
              {element.title}
            </Link>
          </li>
        ))}
      </menu>
    </div>
  );

}

export default Menu
