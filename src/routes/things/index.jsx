import { A } from "@solidjs/router";
import { Dynamic } from "solid-js/web";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import { things } from "../../data/things";

function Card(props) {
  const t = props.data;
  return (
    <section class="card">
      <Dynamic component={t.external ? "a" : A} href={t.url}>
        <img src={t.previewImage} alt={t.altText} style={{ "margin-bottom": "2rem" }} />
        <h2 class="internal-text">{t.coverTitle}</h2>
      </Dynamic>
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
