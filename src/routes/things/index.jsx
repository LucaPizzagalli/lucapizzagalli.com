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


  return (
    <article class="card">
      <Show
        when={isLoopWebsiteCard()}
        fallback={
          <>
            <Dynamic component={t.external ? "a" : A} href={t.url}>
              <img src={t.previewImage} alt={t.altText} />
            </Dynamic>
            <Dynamic component={t.external ? "a" : A} href={t.url}>
              <h2 style={{ "margin": "0 2rem 0 2rem", "align-self": "flex-start" }}>{t.coverTitle}</h2>
            </Dynamic>
          </>
        }
      >
        <a href="/loop" onClick={(e) => { e.preventDefault(); pushLoop(); }}>
          <img src={t.previewImage} alt={t.altText} />
        </a>
        <a href="/loop" onClick={(e) => { e.preventDefault(); pushLoop(); }}>
          <h2 style={{ "margin": "0 2rem 0 2rem", "align-self": "flex-start" }}>{t.coverTitle}</h2>
        </a>
      </Show>
      <p style={{ "margin": "0 2rem 0 2rem", "flex-grow": 1 }}>{t.excerpt}</p>
      <div class="row">
        {t.technologies.map((tech) => <div class="chip">{tech}</div>)}
        <div style={{ "flex-grow": 1 }} />
        {t.github && <a href={t.github} style={{ margin: "1rem" }}>GitHub</a>}
      </div>
    </article>
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
