import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default function About() {
  return (
    <>
      <SEO title="Contacts" />
      <Layout>
        <h1>About me</h1>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", margin: "0 auto 8rem auto", width: "100%", maxWidth: "48rem" }}>
          <a href="/curriculumLucaPizzagalli.pdf" target="_blank" rel="noopener noreferrer">Curriculum</a>
          <a href="https://www.linkedin.com/in/luca-pizzagalli" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/LucaPizzagalli" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <p>Or, you can contact me at <a href="mailto:web@lucapizzagalli.com">web@lucapizzagalli.com</a>.</p>
      </Layout>
    </>
  );
}
