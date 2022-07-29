import React, { useState } from 'react';

import Menu from "./menu"
import "./layout.css"

function Layout({ handler, children }) {
  let [selection, setSelection] = useState("home");
  return (
    <>
      <Menu handler={handler} selected={selection} />
      <div style={{
        maxWidth: `80rem`,
        padding: `3rem 6% 1rem 6%`,
        margin: `0 auto`,
      }}>
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
