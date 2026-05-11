// Sends a Goatcounter pageview on every client-side route change (including the
// initial one). The script tags themselves live in entry-server.jsx so they
// load early; they're configured with `no_onload: true` so the initial count
// is dispatched from here too.

import { useLocation } from "@solidjs/router";
import { createEffect } from "solid-js";

export default function Analytics() {
  const location = useLocation();
  createEffect(() => {
    if (!import.meta.env.PROD) return;
    const gc = typeof window !== "undefined" ? window.goatcounter : undefined;
    if (!gc?.count) return;
    gc.count({ path: location.pathname + location.search + location.hash });
  });
  return null;
}
