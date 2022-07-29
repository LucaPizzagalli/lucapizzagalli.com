import React from "react";

function Chip({ label, href }) {
  return (
    <>
      {href ?
        <a href={href} className="chip">{label}</a>
        :
        <div className="chip">{label}</div>
      }
    </>
  );
}

export default Chip
