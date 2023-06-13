import React, { useEffect } from 'react';
import Reveal from 'reveal.js';

import 'reveal.js/dist/reveal.css';

const Deck = ({ options, children }) => {
  useEffect(() => {
    Reveal.initialize();
  });
  return (
    <div className="reveal">
      <div className="slides">{children}</div>
    </div>
  );
};

export default Deck;
