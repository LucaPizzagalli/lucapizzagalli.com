import { A } from "@solidjs/router";
import { Dynamic } from "solid-js/web";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import { things } from "../../data/things";

function Card(props) {
  const t = props.data;
  const linkTag = t.external ? "a" : A;
  const onClick = (e) => {
    if (t.url === "/this-same-website" && props.setPage) {
      e.preventDefault();
      props.setPage("loop");
    }
  };

  return (
    <article class="card">
      <Dynamic component={linkTag} href={t.url} onClick={onClick}>
        <img src={t.previewImage} alt={t.altText} />
      </Dynamic>
      <Dynamic component={linkTag} href={t.url} onClick={onClick}>
        <h2 style={{ "margin": "0 2rem 0 2rem", "align-self": "flex-start" }}>{t.coverTitle}</h2>
      </Dynamic>
      <p style={{ "margin": "0 2rem 0 2rem", "flex-grow": 1 }}>{t.excerpt}</p>
      <div class="row">
        {t.technologies.map((tech) => <div class="chip">{tech}</div>)}
        <div style={{ "flex-grow": 1 }} />
        {t.github && <a href={t.github} style={{ margin: "1rem" }}>GitHub</a>}
      </div>
    </article>
  );
}

export default function Things(props) {
  return (
    <>
      <SEO title="Things" />
      <Layout setPage={props.setPage}>
        <h1>My projects</h1>
        <p>Some of the projects for which I have a nice pic.</p>
        <div class="grid">
          {things.map((t) => (
            <div class="grid-item"><Card data={t} setPage={props.setPage} /></div>
          ))}
        </div>
      </Layout>
    </>
  );
}
