import React, { useEffect } from "react"

import Menu from "./menu"

import "reveal.js/dist/reveal.css"
import Reveal from 'reveal.js';

let revealOptions = {
  hash: true,
}

function Deck({ options, children, location }) {
  useEffect(() => {
    let revealDeck = new Reveal(document.querySelector('.deck'));
    revealDeck.initialize({ ...revealOptions, ...options });
    return () => { revealDeck.destroy(); };
  }, [options]);

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     let Reveal = require('reveal.js').default;
  //     let revealDeck = new Reveal(document.querySelector('.deck'));
  //     revealDeck.initialize({ ...revealOptions, ...options });
  //     return () => { revealDeck.destroy(); };
  //   }
  // }, [options]);
  return (
    <>
      <div className="reveal deck">
        <div className="slides">{children}</div>
      </div>
      <Menu location={location} foldable={true} />
    </>
  );
}

export default Deck;
