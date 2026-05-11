// In-memory state for the /loop joke. URL stays at /loop the whole time
// (so people can't skip the tedious clicking by editing the address bar).

import { createSignal } from "solid-js";

export const [loopLevel, setLoopLevel] = createSignal(0);
export const [loopInner, setLoopInner] = createSignal("home");

export const INNER_FOLDER = {
  home: "",
  things: "things",
  words: "words",
  about: "about",
};

export const URL_TO_INNER = {
  "/": "home",
  "/things": "things",
  "/words": "words",
  "/about": "about",
};

export function resetLoop() {
  setLoopLevel(0);
  setLoopInner("home");
}

export function pushLoop() {
  setLoopLevel((l) => l + 1);
  setLoopInner("home");
}
