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

function Menu({ location, loop = false, foldable = false }) {
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

  // if (isHidden)
  //   return (
  //     <div className="website-menu">
  //       <menu>
  //         <button class="menu" onClick={() => setIsHidden(false)}>
  //           <span hidden>Open Menu</span>
  //         </button>
  //       </menu>
  //     </div>
  //   );

  if (foldable)
    return (
      <div key={isHidden} className={isHidden ? 'reverse' : ''} style={{ backgroundColor: "inherit" }}>
        <div className="menu-half-circle left" />
        <div className="menu-half-circle right" onClick={() => setIsHidden(false)} />
        <div className="menu-circle-box" onClick={() => setIsHidden(false)} />
        <button className="menu-line" onClick={() => setIsHidden(true)}>
          {/* <div className="menu-inner-line" /> */}
          <span hidden>Close Menu</span>
        </button>
        <div className="menu-text-box"></div>
        <div className="website-menu">
          <menu className="slide-in">
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
