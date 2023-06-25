import React, { useEffect } from "react"
import revealOptions from "./reveal-options"

import "reveal.js/dist/reveal.css"

function Deck({ options, children }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      let Reveal = require('reveal.js').default;
      Reveal.initialize({ ...revealOptions, ...options });
      return () => { Reveal.destroy();};
    }
  }, []);
  return (
    <div className="reveal">
      <div className="slides">{children}</div>
    </div>
  );
}

export default Deck;
