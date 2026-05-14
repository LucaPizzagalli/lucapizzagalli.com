const ALLOWED_ORIGINS = new Set([
  "https://lucapizzagalli.com",
  "https://www.lucapizzagalli.com",
  "http://localhost:3000",
]);

const isEmail = (s) =>
  typeof s === "string" &&
  s.length <= 254 &&
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);

function corsHeaders(origin) {
  const allow = ALLOWED_ORIGINS.has(origin) ? origin : "https://lucapizzagalli.com";
  return {
    "Access-Control-Allow-Origin": allow,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Vary": "Origin",
  };
}

async function parseEmail(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return { error: "Bad request", status: 400 };
  }
  if (body.website) return { honeypot: true };
  const email = String(body.email || "").trim().toLowerCase();
  if (!isEmail(email)) return { error: "Invalid email", status: 400 };
  return { email };
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const headers = corsHeaders(origin);

    if (request.method === "OPTIONS") return new Response(null, { headers });
    if (request.method !== "POST") return new Response("Not found", { status: 404, headers });

    const path = new URL(request.url).pathname;
    if (path !== "/subscribe" && path !== "/unsubscribe") {
      return new Response("Not found", { status: 404, headers });
    }

    const parsed = await parseEmail(request);
    if (parsed.error) return new Response(parsed.error, { status: parsed.status, headers });
    if (parsed.honeypot) return Response.json({ ok: true }, { headers });

    if (path === "/subscribe") {
      await env.SUBSCRIBERS.put(parsed.email, new Date().toISOString());
    } else {
      await env.SUBSCRIBERS.delete(parsed.email);
    }
    return Response.json({ ok: true }, { headers });
  },
};
