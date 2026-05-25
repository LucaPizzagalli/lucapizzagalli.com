import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default function About(props) {
  return (
    <>
      <SEO title="Contacts" />
      <Layout class="words" setPage={props.setPage}>
        <h1>About me</h1>
        <div style={{ "margin-bottom": "8rem", width: "100%", "max-width": "48rem", "flex-direction": "row", "flex-wrap": "wrap", "justify-content": "space-around" }}>
          <a href="/curriculumLucaPizzagalli.pdf" target="_blank" style={{"flex-grow": 0}}>Curriculum</a>
          <a href="https://www.linkedin.com/in/luca-pizzagalli" target="_blank" style={{"flex-grow": 0}}>LinkedIn</a>
          <a href="https://github.com/LucaPizzagalli" target="_blank" style={{"flex-grow": 0}}>GitHub</a>
        </div>
        <p>Or, you can contact me at <a href="mailto:web@lucapizzagalli.com">web@lucapizzagalli.com</a>.</p>
      </Layout>
    </>
  );
}
