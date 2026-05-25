import { A } from "@solidjs/router";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import { posts } from "../../data/posts";

export default function Words(props) {
  return (
    <>
      <SEO title="Words" />
      <Layout class="words" setPage={props.setPage}>
        <h1>Words</h1>
        <p>I wrote something once. Let's call it a blog.</p>
        <ul>
          {posts.map((p) => (
            <li>
              <A href={p.url} style={{"flex-grow": 0}}>{p.title}</A>
              <div />
              <em>{p.date}</em>
            </li>
          ))}
        </ul>
        <p>
          If you want to receive the new posts I will (not) write,
          here you have a <a href="/rss.xml">RSS feed</a> and a <a href="/words/newsletter">newsletter</a>.
        </p>
      </Layout>
    </>
  );
}
