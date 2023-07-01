import React, { useEffect } from "react"

import Menu from "./menu"

import "reveal.js/dist/reveal.css"

let revealOptions = {
  hash: true,
}

function Deck({ options, children, location }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      let Reveal = require('reveal.js').default;
      Reveal.initialize({ ...revealOptions, ...options });
      return () => { Reveal.destroy(); };
    }
  }, [options]);
  return (
    <>
      <div className="reveal">
        <div className="slides">{children}</div>
      </div>
      <Menu loop={false} location={location} foldable={true} />
    </>
  );
}

export default Deck;
