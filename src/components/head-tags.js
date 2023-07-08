import React from "react"
import Seo from "./seo"

function HeadTags({ title, description, pathname, children }) {
  return (
    <>
      <Seo title={title} description={description} pathname={pathname}/>
      {children}
    </>
  );
}


export default HeadTags
