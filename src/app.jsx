import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { MetaProvider } from "@solidjs/meta";
import { Suspense } from "solid-js";
import Analytics from "./components/Analytics";
import FilterDefs from "./components/FilterDefs";
import "./style.css";
import "./components/Layout.css";

export default function App() {
  return (
    <Router root={(props) => (
      <MetaProvider>
        <Analytics />
        <FilterDefs />
        <Suspense>{props.children}</Suspense>
      </MetaProvider>
    )}>
      <FileRoutes />
    </Router>
  );
}
