import { Show, createSignal } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { Dynamic } from "solid-js/web";
import Layout from "../../components/Layout";
import IndexPage from "../index";
import ThingsPage from "../things/index";
import WordsPage from "../words/index";
import AboutPage from "../about";

const TEXTS = [
  "Well, you are already seeing my website. Anyway, here it is again.",
  "Mmm... Sure, same stuff.",
  "Yeah, it works, it just goes on.",
  "Yup, nothing new.",
  "...",
  "Ehm... what are you looking for?",
  "...Still here. I see.",
  "...",
  "...",
  "Congratulation! You won! There is nothing more. You can stop now.",
  "Daamn.",
  "You know, sometimes it fells quite lonely down here.",
  "They all just want. Click here, click there... Give me this page, show me that text... But you are different, you care.",
  "I'm starting to like you ;)",
  "Oh! something weird is happening, I think you're going to deep.",
  "Whoaaaoaah! You have to stop it!",
  "Screw you, I'll try to fix that.",
  "Maybe if I restart it...",
];

const INNER = { "": IndexPage, things: ThingsPage, words: WordsPage, about: AboutPage };

function LoopLevel(props) {
  const navigate = useNavigate();
  if (props.level > 36) {
    navigate("/the-void");
    return null;
  }
  const [page, setPage] = createSignal("");
  const idx = props.level % TEXTS.length;
  return (
    <Layout setPage={props.setPage}>
      <h1>My website</h1>
      <p style={{ width: "100%", "max-width": "48rem", "margin-bottom": "1.3rem" }}>{TEXTS[idx]}</p>
      <div
        style={{
          "align-self": "stretch",
          border: "3px solid var(--highlight-color)",
          ...(idx === 15 ? { filter: "var(--distortion-filter)" } : {}),
        }}
      >
        <Show
          when={page() === "loop"}
          fallback={<Dynamic component={INNER[page()] || IndexPage} setPage={setPage} />}
        >
          <LoopLevel level={props.level + 1} setPage={setPage} />
        </Show>
      </div>
    </Layout>
  );
}

export default function MyWebsite() {
  return <LoopLevel level={0} />;
}
