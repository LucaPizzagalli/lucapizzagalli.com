const React = require("react")

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="goatcounter-config"
      dangerouslySetInnerHTML={{
        __html: `window.goatcounter = { no_onload: true };`,
      }}
    />,
    <script
      key="goatcounter-script"
      async
      data-goatcounter="https://lucapizzagalli.goatcounter.com/count"
      src="//gc.zgo.at/count.js"
    />,
  ])
}