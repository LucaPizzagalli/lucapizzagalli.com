import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { MetaProvider } from "@solidjs/meta";
import { Suspense } from "solid-js";
import FilterDefs from "./components/FilterDefs";
import "./style.css";

export default function App() {
  return (
    <Router root={(props) => (
      <MetaProvider>
        <FilterDefs />
        <Suspense>{props.children}</Suspense>
      </MetaProvider>
    )}>
      <FileRoutes />
    </Router>
  );
}
