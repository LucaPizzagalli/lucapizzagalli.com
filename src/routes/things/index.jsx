import { A, useLocation } from "@solidjs/router";
import { Show } from "solid-js";
import { Dynamic } from "solid-js/web";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import { things } from "../../data/things";
import { pushLoop } from "../../lib/loopState";

function Card(props) {
  const t = props.data;
  const location = useLocation();
  const isLoopWebsiteCard = () =>
    t.url === "/loop" && location.pathname === "/loop";

  const innerLink = (
    <>
      <img src={t.previewImage} alt={t.altText} style={{ "margin-bottom": "2rem" }} />
      <h2 class="internal-text">{t.coverTitle}</h2>
    </>
  );

  return (
    <section class="card">
      <Show
        when={isLoopWebsiteCard()}
        fallback={
          <Dynamic component={t.external ? "a" : A} href={t.url}>
            {innerLink}
          </Dynamic>
        }
      >
        <a href="/loop" onClick={(e) => { e.preventDefault(); pushLoop(); }}>
          {innerLink}
        </a>
      </Show>
      <p class="internal-text" style={{ "flex-grow": 1 }}>{t.excerpt}</p>
      <div style={{ display: "flex", "flex-wrap": "wrap", "align-items": "center" }}>
        {t.technologies.map((tech) => <div class="chip">{tech}</div>)}
        <div style={{ "flex-grow": 1 }} />
        {t.github && <a href={t.github} style={{ margin: "1rem" }}>GitHub</a>}
      </div>
    </section>
  );
}

export default function Things() {
  return (
    <>
      <SEO title="Things" />
      <Layout>
        <h1>My projects</h1>
        <p>Some of the projects for which I have a nice pic.</p>
        <div class="grid">
          {things.map((t) => (
            <div class="grid-item"><Card data={t} /></div>
          ))}
        </div>
      </Layout>
    </>
  );
}
