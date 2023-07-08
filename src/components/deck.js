import React, { useEffect } from "react"

import Menu from "./menu"

import "reveal.js/dist/reveal.css"
import "../assets/style/slides.css"

let revealOptions = {
  hash: true,
  autoPlayMedia: true,
}

function Deck({ options, children, location, backgroundColor="#111111" }) {
  useEffect(() => {
    // if (typeof window !== 'undefined') {
    let Reveal = require('reveal.js').default;
    let revealDeck = new Reveal(document.querySelector('.deck'));
    revealDeck.initialize({ ...revealOptions, ...options });
    // }
    return () => { revealDeck.destroy(); };
  }, [options]);
  return (
    <>
      <div className="reveal deck">
        <div className="slides">{children}</div>
      </div>
      <div className="menu-page" style={{ position: "absolute", backgroundColor: backgroundColor}}>
        <Menu location={location} foldable={true} />
      </div>
    </>
  );
}

export default Deck;
