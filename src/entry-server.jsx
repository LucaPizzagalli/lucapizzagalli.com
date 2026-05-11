import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          {/* Goatcounter analytics. no_onload defers the initial count so it
              can be dispatched from src/components/Analytics.jsx on each
              client-side route change (including the first). */}
          <script>{`window.goatcounter = { no_onload: true };`}</script>
          <script async data-goatcounter="https://lucapizzagalli.goatcounter.com/count" src="//gc.zgo.at/count.js"></script>
          {assets}
        </head>
        <body>
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
