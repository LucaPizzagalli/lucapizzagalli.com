import { onCleanup, onMount } from "solid-js";
import Menu from "./Menu";
import "reveal.js/dist/reveal.css";
import "./Deck.css";

const defaultOptions = {
  hash: true,
  fragmentInURL: false,
  autoPlayMedia: true,
};

export default function Deck(props) {
  let container;
  let deck;

  onMount(async () => {
    const Reveal = (await import("reveal.js")).default;
    deck = new Reveal(container);
    deck.initialize({ ...defaultOptions, ...props.options });
  });

  onCleanup(() => deck?.destroy());

  return (
    <>
      <div ref={container} class={"reveal deck " + (props.deckTheme || "")}>
        <div class="slides">{props.children}</div>
      </div>
      <Menu foldable={true} menuTheme={props.deckTheme} />
    </>
  );
}
