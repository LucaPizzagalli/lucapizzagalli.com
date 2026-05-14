import { createSignal } from "solid-js";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";

const WORKER_URL = "https://lp-newsletter.mail-6e8.workers.dev";

function MailForm(props) {
  const [status, setStatus] = createSignal("idle");

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    try {
      const res = await fetch(`${WORKER_URL}${props.path}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email.value,
          website: form.website.value,
        }),
      });
      setStatus(res.ok ? "ok" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {status() !== "ok" && (
        <form onSubmit={onSubmit}>
          <input aria-label="email" type="email" name="email" required placeholder="Email" autocomplete="email" style={{width: "16rem"}}/>
          <input class="honeypot" type="text" name="website" tabindex="-1" autocomplete="off" aria-hidden="true"
          style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }} />
          <button type="submit" disabled={status() === "sending"} tabindex="0" class="chip">
            {status() === "sending" ? `${props.activeLabel}…` : props.label}
          </button>
        </form>
      )}
      {status() === "ok" && <p>{props.successMsg}</p>}
      {status() === "error" && <p>Something went wrong. Please try again.</p>}
    </>
  );
}

export default function Newsletter() {
  return (
    <>
      <SEO title="Newsletter" />
      <Layout class="words">
        <h1>Send me Words</h1>
        <p>Put here your email address if you want to read in your email client the stuff I'll write. Frequency is one post every few years.</p>
        <MailForm
          path="/subscribe"
          label="Subscribe"
          activeLabel="Subscribing"
          successMsg={<em>You are now subscribed.</em>}
        />

        <h2>Stop sending me Words</h2>
        <p>Got enough words? Put your email here to stop receiving more.</p>
        <MailForm
          path="/unsubscribe"
          label="Unsubscribe"
          activeLabel="Unsubscribing"
          successMsg={<em>You are unsubscribed.</em>}
        />
      </Layout>
    </>
  );
}
