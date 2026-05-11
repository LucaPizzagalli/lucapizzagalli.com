import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default function Home() {
  const strike = { textDecoration: "line-through" };
  return (
    <>
      <SEO />
      <Layout>
        <h1>Hello.</h1>
        <div>
          <div>
            <p>I'm Luca.</p>
            <p>
              The place you are now in is the website I put together in a bunch of days for declaring to the world that{" "}
              <em style={strike}>I'm looking for a job</em>{" "}
              <em style={strike}>I found a job</em>{" "}
              <strong>I quit my job</strong>.
              A job in <strong>data science</strong>, or something related.
              Anywhere in <em style={strike}>the world</em>{" "}
              <em style={strike}>Berlin</em>{" "}
              <strong>Taipei</strong> is fine.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}
